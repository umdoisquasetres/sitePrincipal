import { useEffect } from 'react';

export const useScrollSpy = (selector: string) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll(selector);

    function changeLinkState() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < (sections[index] as HTMLElement).offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = document.querySelector(`${selector}[href="#${sections[index].id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    return () => window.removeEventListener('scroll', changeLinkState);
  }, [selector]);
};
