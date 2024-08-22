class init {
  async init() {
    await this.sequelize.sync();
  }
  async ensureInitialized() {
    if (!this.initialized) {
      await this.init();
      this.initialized = true;
    }
  }
}

export default init;
