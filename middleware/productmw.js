const productMW = (req, res, next) => {
    console.log('Midddlware ma');
    
  let {uid,title, description} = req.body

  if(!uid || !title || !description){
    return res.status(400).json({serverMsg: 'ALL FIELDS COMPLASARY'})
  }

  if(title.length < 7){
    return res.status(400).json({serverMsg: 'Title must than a 7 chracter'})
  }

  if(description.length < 10){
    return res.status(400).json({serverMsg: 'Descr must than a 10 character'})
  }

  next()
}

module.exports = {productMW}