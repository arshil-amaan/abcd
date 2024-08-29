import React, { useMemo } from 'react';
import style from './skills.module.css';

const SkillCard = ({ tooltip, tech }) => {
  const tooltipContent = useMemo(() => {
    let idx = tooltip.indexOf(" ");
    let fw = tooltip.substring(0, idx);
    let rest = tooltip.substring(idx + 1);

    let tech2 = `${tech}-original`;

    switch (tech) {
      case "vscode":
        fw = "Visual Studio Code";
        rest = rest.substring(12);
        break;
      case "tailwindcss":
        fw = "Tailwind CSS";
        rest = rest.substring(4);
        break;
      case "reactrouter":
        fw = "React Router";
        rest = rest.substring(7);
        break;
      case "githubcodespaces":
        fw = "Github Codespaces";
        rest = rest.substring(11);
        break;
      case "jest":
      case "axios":
        tech2 = `${tech}-plain`;
        break;
      case "npm":
        tech2 = `${tech2}-wordmark`;
        break;
      default:
        break;
    }

    return {
      tooltip: (
        <>
          <span className='text-xl font-bold underline'>{fw}</span>&nbsp;
          {rest}
        </>
      ),
      tech2
    };
  }, [tooltip, tech]);

  const imageUrl = useMemo(() => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tooltipContent.tech2}.svg`, [tech, tooltipContent.tech2]);

  return (
    <div className={`${style["tooltip"]}`}>
      <div className='w-fit flex items-center justify-center m-[10px] px-8 md:px-16 py-2 bg-slate-100 rounded-md hover:shadow-none shadow-[0_0_4px_#38bdf8]'>
        <img className='w-[40px] md:w-[70px]' src={imageUrl} alt={`${tech} logo`} loading="lazy" />
      </div>
      <div className={`${style["tooltiptext"]} font-sans`}>
        {tooltipContent.tooltip}
      </div>
    </div>
  );
}

export default SkillCard;
