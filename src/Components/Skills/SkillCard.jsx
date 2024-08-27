import React from 'react'
import style from './skills.module.css'

const SkillCard = (props) => {
  const idx = props.tooltip.indexOf(" ");

  let fw = props.tooltip.substring(0, idx)
  let rest = props.tooltip.substring(idx + 1)

  let tech = props.tech
  let tech2 = props.tech+"-original"

  if (tech === "vscode") {
    fw = "Visual Studio Code";
    rest = rest.substring(12)
  } else if (tech === "tailwindcss") {
    fw = "Tailwind CSS";
    rest = rest.substring(4)
  } else if (tech === "reactrouter") {
    fw = "React Router";
    rest = rest.substring(7)
  } else if (tech === "githubcodespaces") {
    fw = "Github Codespaces";
    rest = rest.substring(11)
  }

  if(tech==="jest" || tech==="axios"){
    tech2 = tech+"-plain"
  }
  if(tech==="npm"){
    tech2 = tech2+"-wordmark"
  }

  let tooltip = (
    <>
      <span className='text-xl font-bold underline'>{fw}</span>&nbsp;
      {rest}
    </>
  );

  return (
    <div className={`${style["tooltip"]} `}>
        <div className='w-fit flex items-center justify-center m-[10px] px-8 md:px-16 py-2 bg-slate-100 rounded-md hover:shadow-none shadow-[0_0_4px_#38bdf8]'>
          <img className='w-[40px] md:w-[70px]' src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech2}.svg`} />
        </div>
      <div className={`${style["tooltiptext"]} font-sans`}>{tooltip}</div>
    </div>
  )
}

export default SkillCard;