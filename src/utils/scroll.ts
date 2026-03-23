const HEADER_OFFSET = 96;

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = 'smooth') {
  const sectionElement = document.getElementById(sectionId);

  if (!sectionElement) {
    return;
  }

  const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(sectionTop, 0),
    behavior,
  });
}
