import React from "react";

// Big page title used at the top of inner pages
function PageHeader({ title, children }) {
  return (
    <section className="px-5 md:px-[8vw] pt-36 md:pt-52 pb-12 md:pb-20">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-display max-w-[14ch]">{title}</h1>
        {children && <div className="mt-10 md:mt-14 max-w-2xl text-lg md:text-xl leading-relaxed">{children}</div>}
      </div>
    </section>
  );
}

export default PageHeader;
