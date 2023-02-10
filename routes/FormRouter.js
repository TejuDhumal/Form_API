var router = require('express').Router()
const { createForm, formsGet, getFormById, allResponses, submitResponse, getResponse } = require('../services/FormService.js')

router.route("/create").post(createForm)
router.route("/forms").get(formsGet)
router.route("/form/:formId").get(getFormById)
router.route("/addresponse").post(submitResponse)
router.route("/responses").get(allResponses)

router.route("/getresponse/:formId").get(getResponse)



module.exports = router;