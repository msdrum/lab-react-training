function Greetings({ lang, children }) {
  if (lang === 'de') {
    return (
      <div lang={lang} className="hallo">
        <p>Hallo {children}</p>
      </div>
    );
  } else if (lang === 'fr') {
    return (
      <div lang={lang} className="bonjour">
        <p>Bonjour {children}</p>
      </div>
    );
  } else if (lang === 'es') {
    return (
      <div lang={lang} className="">
        <p>Holla {children}</p>
      </div>
    );
  } else {
    return (
      <div lang={lang} className="">
        <p>Hello {children}</p>
      </div>
    );
  }
}

export default Greetings;
