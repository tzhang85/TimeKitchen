const env = process.env;

//named exports
export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message){
	console.info('**********');
	console.info(message);
	console.info('**********');
};

//default export
export default {
	port: env.PORT || 8080
};
