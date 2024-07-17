const Router = require ('express');
const router = Router ();

//import routes

//status api andpoint

router.get('/api-status', (reg,res) => {
    res.send(['status' 'on']);
});
  
//use routes

module.exports = router;