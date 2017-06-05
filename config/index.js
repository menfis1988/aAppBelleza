exports.config = () => {
  const envJSON = require('./config.js');
  const node_env = process.env.NODE_ENV || 'development';
  
  return envJSON[node_env];
}