const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const saltRounds = 10;

// npc Model
const npcSchema = require('../database/datamodel/npc');

// CREATE npc
router.route('/create-npc').post((req, res, next) => {
  bcrypt.hash(req.body.ssn, saltRounds, function (err, hash) {
    const newBody = {
      ...req.body,
      ssn: hash,
    };
    npcSchema.create(newBody, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data._id);
      }
    });
  });
});

// Access the session as req.session
router.route('/login').get(function (req, res, next) {
  if (!req.cookies.user_sid) {
    const id = uuidv4();
    // 15 minutes
    res.cookie('user_sid', id, { maxAge: 900000, httpOnly: true });
    console.log('cookie baked');
    res.json({ isLoggedIn: true });
  } else {
    console.log(req.cookies);
    res.json({ isLoggedIn: true });
  }
});

// Access the session as req.session
router.route('/logout').get(function (req, res, next) {
  if (req.cookies.user_sid) {
    res.clearCookie('user_sid');
    console.log('cookie unbaked');
    res.json({ isLoggedIn: false });
  } else {
    console.log(req.cookies);
    res.json({ isLoggedIn: false });
  }
});

// READ npcs
router.route('/').get((req, res, next) => {
  if (req.cookies.user_sid) {
    npcSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  }
});

// Update npc
router.route('/update-npc/:id').put((req, res, next) => {
  if (req.cookies.user_sid) {
    bcrypt.hash(req.body.ssn, saltRounds, function (err, hash) {
      const newBody = {
        ...req.body,
        ssn: hash,
      };
      npcSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: newBody,
        },
        (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.json(data._id);
          }
        }
      );
    });
  }
});

// Get Single npc
router.route('/get-npc/:id').get((req, res, next) => {
  if (req.cookies.user_sid) {
    npcSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  }
});

// Delete npc
router.route('/delete-npc/:id').delete((req, res, next) => {
  if (req.cookies.user_sid) {
    npcSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  }
});

module.exports = router;
