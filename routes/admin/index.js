module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const BlogModal = require('../../models/blog')

  // 保存文章
  router.post('/saveBlog', async (req, res) => {
    const modal = await BlogModal.create(req.body)
    res.send(modal)
  })

  app.use('/admin/api', router)
}