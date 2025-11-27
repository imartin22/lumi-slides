import { workflowPresentation, workflowPrintSlides } from './WorkflowPresentation';
import { sprintPlanningPresentation, sprintPlanningPrintSlides } from './SprintPlanningPresentation';

export const presentations = [
  {
    id: 'lumi-status-noviembre-2025',
    title: 'Lumi: Producto',
    date: 'Noviembre 2025',
    description: 'Roadmap Q4 2025 - Update para Director de Producto',
    component: workflowPresentation,
    printSlides: workflowPrintSlides
  },
  {
    id: 'sprint-planning-dic-2025',
    title: 'Sprint Planning',
    date: 'Dic 1-15, 2025',
    description: 'Sprint Planning para Dev Team - Actions + Assistant',
    component: sprintPlanningPresentation,
    printSlides: sprintPlanningPrintSlides
  }
];

export const getPresentation = (id) => {
  return presentations.find(p => p.id === id);
};

// Get print-optimized slides for a presentation
export const getPrintSlides = (presentationIndex) => {
  const presentation = presentations[presentationIndex];
  // Use print-specific slides if available, otherwise fall back to regular slides
  return presentation.printSlides || presentation.component.slides;
};
