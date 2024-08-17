const verifyIdToken = async (req, res, next) => {
  //  const idToken = req.headers.authorization.split('Bearer ')[1];
  const idToken = 'hh'
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log('Decoded Token:', decodedToken);
      req.decodedToken = decodedToken; // Optional: Store the decoded token in the request object
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error('Error verifying ID token:', error);
      res.status(401).json({ error: 'Unauthorized' });
    }
  }

  module.exports = verifyIdToken