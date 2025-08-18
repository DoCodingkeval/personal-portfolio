import Content from './Content';
import Sidebar from './Sidebar';

const Contact = () => {
  return (
    <section className="mx-auto grid h-screen w-full max-w-7xl text-[var(--text-white)] lg:grid-cols-[208px_auto] xl:grid-cols-[259.5px_auto]">
      <Sidebar />
      <Content />
    </section>
  );
};

export default Contact;
