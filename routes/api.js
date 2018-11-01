const express = require('express')
const router = express.Router()
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/', function(req, res, next) {
  res.json({ body: 'Api running here' })
})

router.get('/recent-work', function(req, res, next) {
  res.json({
    body: {
      projects: [
        {
          name: 'Pampered Chef',
          description:
            'Explore Pampered Chef to find top kitchen products, recipes, and party ideas you’ll love, plus details on how to share the love as a Pampered Chef consultant.',
          tags: ['angular5', 'nodejs', 'javascript'],
          // image: require('../../src/assets/images/pamperedchef.png'),
          link: 'https://www.pamperedchef.com/'
        },
        {
          name: 'Sucre Quiz',
          description: 'Farmacia Sucre - ¿Qué tal estás?',
          tags: ['angular', 'html5', 'css3'],
          // image: require('../../assets/images/sucre-app.png'),
          link: 'http://sucre-quiz.codeskill.io/'
        },
        {
          name: 'Codeskill',
          description: 'Web development agency',
          tags: ['css', 'php', 'wordpress'],
          // image: require('../../assets/images/codeskill.png'),
          link: 'http://staging.codeskill.io/'
        },
        {
          name: 'EuroOpticas',
          description: 'Full featured website',
          tags: ['html', 'php', 'wordpress'],
          // image: require('../../assets/images/euroopticas.png'),
          link: 'http://euroopticas.codeskill.io'
        },
        {
          name: 'Dante Costa Rica',
          description: 'Website for a university.',
          tags: ['nodejs', 'mongodb', 'pug'],
          // image: require('../../assets/images/dante.png'),
          link: 'http://www.dantecostarica.org/'
        },
        {
          name: 'United World College Costa Rica',
          description: 'Website for a university.',
          tags: ['nodejs', 'mongodb', 'css'],
          // image: require('../../assets/images/uwc.png'),
          link: 'http://www.uwccostarica.org/'
        },
        {
          name: 'Viva Idea',
          description: 'Full feature website',
          tags: ['nodejs', 'mongodb', 'pug'],
          // image: require('../../assets/images/viva.png'),
          link: 'http://www.vivaidea.org'
        }
      ]
    }
  })
})

module.exports = router
