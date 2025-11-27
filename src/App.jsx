import React, { useState, useEffect } from 'react';
import { TitleSlide } from './components/TitleSlide';
import { ProcessFlow } from './components/ProcessFlow';
import { SplitContent } from './components/SplitContent';
import { ContentSlide } from './components/ContentSlide';
import { SlideContainer } from './components/SlideContainer';

// Import presentations manager
import { presentations, getPrintSlides } from './presentations';

import { ArrowLeft, ArrowRight, Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';

// Context for print mode
import { PrintModeContext } from './context/PrintModeContext';

// Get presentation index from URL query parameter
const getPresentationIndexFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const presentationId = params.get('presentation');
  if (presentationId) {
    const index = presentations.findIndex(p => p.id === presentationId);
    if (index !== -1) return index;
  }
  return 0;
};

function App() {
  // Initialize with URL parameter - this runs synchronously on first render
  const [currentPresentationIndex, setCurrentPresentationIndex] = useState(() => getPresentationIndexFromURL());
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  // Listen for URL changes (popstate for back/forward)
  useEffect(() => {
    const handleUrlChange = () => {
      const newIndex = getPresentationIndexFromURL();
      setCurrentPresentationIndex(newIndex);
      setCurrentSlideIndex(0);
    };
    
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const currentPresentation = presentations[currentPresentationIndex];
  const activeSlides = currentPresentation.component.slides;
  const totalSlides = activeSlides.length;
  const CurrentSlideComponent = activeSlides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) setCurrentSlideIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const exportAllToPDF = async () => {
    setIsExporting(true);
    
    // Dimensiones fijas 1920x1080 (16:9)
    const SLIDE_WIDTH = 1920;
    const SLIDE_HEIGHT = 1080;
    
    // PDF en mm - usamos dimensiones personalizadas 16:9
    const pdfWidth = 297; 
    const pdfHeight = 297 * (9/16); // ~167.06mm
    
    const pdf = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: [pdfWidth, pdfHeight]
    });
    
    // Get the hidden container with all slides
    const container = document.getElementById('print-container');
    const slides = Array.from(container.children);

    try {
      for (let i = 0; i < slides.length; i++) {
        const slideEl = slides[i];

        // Render each slide to canvas with fixed dimensions
        const canvas = await html2canvas(slideEl, { 
          scale: 2,
          useCORS: true,
          logging: false,
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          windowWidth: SLIDE_WIDTH,
          windowHeight: SLIDE_HEIGHT,
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0
        });
        
        const imgData = canvas.toDataURL('image/png');
        
        if (i > 0) pdf.addPage([pdfWidth, pdfHeight]);
        
        // Add image fitting perfectly
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // --- LINK PROCESSING ---
        const links = slideEl.querySelectorAll('a');
        const scaleX = pdfWidth / SLIDE_WIDTH;
        const scaleY = pdfHeight / SLIDE_HEIGHT;

        links.forEach(link => {
          const href = link.getAttribute('href');
          if (!href) return;

          const linkRect = link.getBoundingClientRect();
          const slideRect = slideEl.getBoundingClientRect();

          const x = (linkRect.left - slideRect.left) * scaleX;
          const y = (linkRect.top - slideRect.top) * scaleY;
          const w = linkRect.width * scaleX;
          const h = linkRect.height * scaleY;

          pdf.link(x, y, w, h, { url: href });
        });
      }
      
      pdf.save(`${currentPresentation.component.id}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Check console.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative h-screen bg-gray-50 overflow-hidden">
      {/* Active Slide Viewer */}
      <div className="w-full h-full">
        {CurrentSlideComponent}
      </div>

      {/* Hidden Container for PDF Export - 1920x1080 fixed dimensions */}
      <PrintModeContext.Provider value={true}>
        <div 
          id="print-container" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0,
            width: '1920px',
            height: '1080px',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -9999,
            opacity: 0
          }}
        >
          {(getPrintSlides ? getPrintSlides(currentPresentationIndex) : activeSlides).map((slide, index) => (
            <div 
              key={index} 
              className="print-slide" 
              style={{ 
                width: '1920px', 
                height: '1080px', 
                background: 'white', 
                position: 'relative', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </PrintModeContext.Provider>

      {/* Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 items-center transition-all hover:shadow-[0_8px_40px_rgba(0,0,0,0.16)] z-50">
        <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="p-2 hover:bg-gray-50 rounded-xl disabled:opacity-30 text-tn-text transition-colors">
          <ArrowLeft size={20} />
        </button>
        
        <span className="text-xs font-bold text-tn-blue tracking-wider min-w-[60px] text-center">
          {currentSlideIndex + 1} / {totalSlides}
        </span>
        
        <button onClick={nextSlide} disabled={currentSlideIndex === totalSlides - 1} className="p-2 hover:bg-gray-50 rounded-xl disabled:opacity-30 text-tn-text transition-colors">
          <ArrowRight size={20} />
        </button>
        
        <div className="w-px h-4 bg-gray-200 mx-2" />
        
        <button 
          onClick={exportAllToPDF} 
          disabled={isExporting}
          className="flex items-center gap-2 px-4 py-2 bg-tn-blue text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-tn-blue/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow"
        >
          {isExporting ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
          <span>{isExporting ? 'Generating...' : 'PDF'}</span>
        </button>
      </div>
    </div>
  );
}

export default App;
