module.exports.config = {
	name: "outbox",	
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Out Thread", 
	commandCategory: "Admin",
	usages: "out",
	cooldowns: 0, 
	dependencies: "",

};

module.exports.run = async function({ api, Users, Threads, event, args }) {
  
  
  if (!args[0]) return api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID);
  var idbox = args[0];
  var reason = args.slice(1);
  
api.sendMessage("Đã nhận lệnh out nhóm từ admin, lý do: "+reason.join(" "), idbox, () =>

api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>

api.sendMessage("Đã out box có id: "+idbox+" với lý do: "+reason.join(" "), event.threadID)))
  

  }
    
    
