const envHandler = {
  getEnvironment() {
    return process.env.NODE_ENV;
  },
  //check whether client or server
  isClient() {
    return typeof window !== "undefined";
  },
  isServer() {
    return !this.isClient();
  },
};

export default envHandler;
