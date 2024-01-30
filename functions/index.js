const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.fetchItems = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const itemsSnapshot = await admin.firestore().collection('items').get();
      const items = [];
      itemsSnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
      });
      response.json(items);
    } catch (error) {
      console.error("Error fetching data: ", error);
      response.status(500).send(error);
    }
  });
});
