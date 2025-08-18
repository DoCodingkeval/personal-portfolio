const SuccessMsg = ({ setSuccess }) => {
  return (
    <div className="flex h-max w-full flex-col items-center justify-center text-center text-sm xl:text-[1rem]">
      <h1 className="text-2xl">Thank you! 🤘</h1>
      <p className="py-2 leading-relaxed text-[var(--text-gray)] xl:px-6">
        Your message has been accepted. You will receive answer soon!
      </p>
      <a
        href="/contact"
        onClick={() => setSuccess(false)}
        className="mt-4 inline-block rounded-lg bg-[#ffb86a] p-2 text-sm tracking-tighter text-zinc-900"
      >
        send-new message
      </a>
    </div>
  );
};

export default SuccessMsg;
