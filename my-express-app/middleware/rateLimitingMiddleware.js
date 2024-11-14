const requestLimit = 5;
const timeFrame = 60 * 1000; 
const requestArray = [];

function rateLimitingMiddleware(req, res, next) {
  const clientIP = req.ip || req.connection.remoteAddress;
  const currentTime = Date.now();

  const validRequests = requestArray.filter(
    (request) => currentTime - request.timestamp < timeFrame
  );

  const clientRequests = validRequests.filter(
    (request) => request.ip === clientIP
  );

  if (clientRequests.length >= requestLimit) {
    return res.status(429).json({
      message: "Too Many Requests - Please try again later.",
    });
  }

  requestArray.push({
    ip: clientIP,
    timestamp: currentTime,
  });

  next();
}

module.exports = rateLimitingMiddleware;
