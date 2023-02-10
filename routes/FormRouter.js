var router = require('express').Router()
const { createForm, formsGet, getFormByEmail, allResponses, submitResponse, getResponse, getAllFormsOfUser } = require('../services/FormService.js')

router.route("/create").post(createForm)
router.route("/forms").get(formsGet)
router.route("/form/:email").get(getFormByEmail)
router.route("/addresponse").post(submitResponse)
router.route("/email/:email").get(getAllFormsOfUser)

router.route("/getresponse/:formId").get(getResponse)



module.exports = router;