function Footer() {
  const year = new Date().getFullYear();
  return (
    <h1 className="text-center text-webbut-400 mb-4 mt-20 sm:mt-8 md:mt-24 text-sm font-medium md:text-base">
      &copy;{year} | anaysingh.in
    </h1>
  );
}

export default Footer;
