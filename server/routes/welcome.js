export default router => (
  router
    .get('/', 'root', (req, res) => {
      res.render('welcome/index');
    })
    .get('/card', 'card', (req, res) => {
      res.render('components/card');
    }));
