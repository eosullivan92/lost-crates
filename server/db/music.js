const connection = require('./connection')

function getMusic(db = connection) {
  return db('music').select()
}

function getAlbumById(id, db = connection) {
  return db('music').select().where('id', id).first()
}

function addMusicItem(album, db = connection) {
  return db('music').insert(album).returning('id')
}

function deleteMusicItem(id, db = connection) {
  return db('music').select().where('id', id).del()
}

function updateMusicItem(updatedAlbum, db = connection) {
  return db('music').select().where('id', updatedAlbum.id).update(updatedAlbum)
}

function getAlbumsAndImages(db = connection) {
  return db('music')
    .innerJoin('images', 'music.id', 'images.product_id')
    .select('music.*', 'images.path AS image_path')
    .where('product_type', 'music')
}

module.exports = {
  getMusic,
  getAlbumById,
  addMusicItem,
  deleteMusicItem,
  updateMusicItem,
  getAlbumsAndImages,
}
