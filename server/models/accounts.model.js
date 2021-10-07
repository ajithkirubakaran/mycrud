module.exports = mongoose => {
  const Accounts = mongoose.model(
    "accounts",
    mongoose.Schema(
      {
        username: String,
        password: String
	  },
	  { timestamps: true }
	 )
	);	
	return Accounts;
  };