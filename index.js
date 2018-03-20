module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'scene': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll give you some VR HTML you can put in your webpage.`;
};