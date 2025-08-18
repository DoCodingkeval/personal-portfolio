import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');

  const codeColors = {
    keyword: 'text-[#5E5DF8]',
    variable: 'text-[#C25069]',
    punctuation: 'text-[#D5D8DD]',
    string: 'text-[#039E91]',
  };

  const codeLines = [
    <>
      <span className={codeColors.keyword}>const </span>
      <span className={codeColors.punctuation}>page&nbsp;= </span>
      <span className={codeColors.variable}>
        findPage
        <span className={codeColors.punctuation}>(</span>
        <span className={codeColors.string}>{`'you-were-looking-for'`}</span>
        <span className={codeColors.punctuation}>);</span>
      </span>
    </>,
    <></>,
    <>
      <span className={codeColors.keyword}>if</span>
      <span className={codeColors.punctuation}>{`(!page) {`}</span>
    </>,
    <>
      <span className={codeColors.variable}>
        &nbsp;&nbsp;console<span className={codeColors.punctuation}>.</span>
        <span className={codeColors.punctuation}>(</span>
        <span
          className={codeColors.string}
        >{`"Oops! Looks like you took a wrong turn in the codebase."`}</span>
        <span className={codeColors.punctuation}>);</span>
      </span>
    </>,
    <>
      <span className={codeColors.variable}>
        &nbsp;&nbsp;console<span className={codeColors.punctuation}>.</span>
        <span className={codeColors.punctuation}>(</span>
        <span
          className={codeColors.string}
        >{`"But hey, since you're here..."`}</span>
        <span className={codeColors.punctuation}>);</span>
      </span>
    </>,
    <>
      <span className={codeColors.variable}>
        &nbsp;&nbsp;console<span className={codeColors.punctuation}>.</span>
        <span className={codeColors.punctuation}>(</span>
        <span
          className={codeColors.string}
        >{`"🔍 Go back to the homepage and explore more cool stuff!"`}</span>
        <span className={codeColors.punctuation}>);</span>
      </span>
    </>,
    <>
      <span className={codeColors.keyword}>&nbsp;&nbsp;throw new</span>
      <span className={codeColors.variable}>
        Error
        <span className={codeColors.punctuation}>(</span>
        <span>{`"404: PageNotFoundError 🥲"`}</span>
        <span className={codeColors.punctuation}>);</span>
      </span>
    </>,
    <>
      <span className={codeColors.punctuation}>{`}`}</span>
    </>,
    <></>,
    <>
      <span>/* Suggestions:</span>
    </>,
    <>
      <span>* - Check the URL for typos</span>
    </>,
    <>
      <span>* - Use the site navigation</span>
    </>,
    <>
      <span>* - Or hit CMD+Z in real life 😅</span>
    </>,
    <>
      <span>*/</span>
    </>,
    <></>,
    <>
      <span className={codeColors.variable}>redirect</span>
      <span className={codeColors.punctuation}>(</span>
      <button
        className={`${codeColors.string} cursor-pointer`}
        onClick={goHome}
      >{`'home'`}</button>
      <span className={codeColors.punctuation}>);</span>
    </>,
  ];

  return (
    <div className="flex h-screen w-full flex-col justify-center sm:items-center md:flex-row lg:gap-10">
      <img
        src="../public/error.png"
        alt="404 error"
        className="w-2/3 sm:w-1/3 lg:w-1/4"
      />
      <div className="flex flex-col justify-center pt-2 pl-10 lg:hidden">
        <span className={codeColors.keyword}>
          throw new <span className={codeColors.variable}>Error </span>
          <span className={codeColors.punctuation}>(</span>{' '}
        </span>
        <h1 className={codeColors.string}>{`"404: PageNotFoundError 🥲"`}</h1>
        <span className={codeColors.punctuation}>);</span>
        <span className={`${codeColors.variable} pt-6`}>
          <button onClick={goBack}>goBack</button>
          <span className={codeColors.punctuation}>() || </span>
          <button onClick={goHome}>goHome</button>{' '}
          <span className={codeColors.punctuation}>();</span>
        </span>
      </div>
      <div className="max-[1024px]:hidden lg:visible">
        <ul className="list-inside list-decimal text-xs text-[#7C8CA3] xl:text-[1rem]">
          {codeLines.map((lines, index) => (
            <li key={index}>&nbsp;&nbsp;{lines}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
