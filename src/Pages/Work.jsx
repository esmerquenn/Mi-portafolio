import { projects } from "../helpers/works";
import PageHeader from "../Components/PageHeader";
import WorkList from "../Components/WorkList";

function Work() {
  return (
    <>
      <PageHeader title="Creating next level digital products">
        <p className="text-muted">
          Websites, e-commerce platforms and dashboards I&apos;ve built end to end as a full-stack developer.
        </p>
      </PageHeader>

      <section className="px-5 md:px-[8vw] pb-28 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          <WorkList projects={projects} showColumns />
          <p className="text-sm text-muted mt-12 md:mt-16 md:px-[4vw] max-w-2xl">
            Only freelance work is shown here. My other projects — internal tracking and cargo systems — are under
            confidentiality agreements.
          </p>
        </div>
      </section>
    </>
  );
}

export default Work;
