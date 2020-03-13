const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
var _widgets = require('./data/widgets_');


app.use(cors());
app.use(morgan('short'));

app.get('/widget/:id', (req, res) => {
  console.log("get with id :"+  req.params.id)

  res.end();
})

app.get("/", (req, res) => {
    console.log('server sql respons'),
    res.send("Hello ")
})

app.get("/widget", (req, res) => {
    var widget = {
        "created_at": "2018-12-20 16:31:25",
        "design": {
          "renderHTML": true,
          "listStyle": "template0",
          "render": {
            "target": {
              "headline": {
                "label": "Headline"
              },
              "list": {},
              "powered": {
                "label": "Powered",
                "position": "footer",
                "color": "AAAAAA",
                "text": "powered by plista"
              },
              "advertise": {
                "label": "Advertise",
                "parent": "footer",
                "text": "advertise here"
              },
              "oba": {
                "label": "OBA",
                "color": "AAAAAA",
                "position": "right"
              }
            },
            "default": {
              "image": {
                "label": "Image",
                "width": 320,
                "height": 180,
                "crop": true
              },
              "title": {
                "label": "Title",
                "length": 50,
                "ellipsis": true,
                "split": true
              },
              "text": {
                "label": "Text",
                "length": 50,
                "ellipsis": true,
                "split": true
              },
              "category": {
                "label": "Category",
                "length": 50,
                "ellipsis": true,
                "split": true
              }
            },
            "pet": {
              "image": {
                "label": "Image\/Video",
                "width": 320,
                "height": 180,
                "crop": true,
                "maxWidth": 580,
                "autoClose": false,
                "mode": "auto",
                "engage": "auto"
              },
              "title": {
                "label": "Title",
                "length": 50,
                "ellipsis": true,
                "split": true
              },
              "text": {
                "label": "Text",
                "length": 50,
                "ellipsis": true,
                "split": true
              },
              "brand": {
                "label": "Brand",
                "landingpage": false,
                "length": 0,
                "ellipsis": false,
                "split": true
              },
              "adhint": {
                "color": "AAAAAA",
                "type": "text",
                "multiple": false,
                "ad": "Promoted",
                "pcd": "Promoted"
              }
            }
          },
          "slots": [{
            "preferences": [{
              "type": "default",
              "transparency": 1
            }]
          }, {
            "preferences": [{
              "type": "pet",
              "condition": {
                "adblocker": "none"
              },
              "transparency": 1
            }, {
              "type": "default",
              "transparency": 1
            }]
          }, {
            "preferences": [{
              "type": "default",
              "transparency": 1
            }]
          }, {
            "preferences": [{
              "type": "pet",
              "condition": {
                "adblocker": "none"
              },
              "transparency": 1
            }, {
              "type": "default",
              "transparency": 1
            }]
          }, {
            "preferences": [{
              "type": "default",
              "transparency": 1
            }]
          }, {
            "preferences": [{
              "type": "pet",
              "condition": {
                "adblocker": "none"
              },
              "transparency": 1
            }, {
              "type": "default",
              "transparency": 1
            }]
          }]
        },
        "domainid": 12345,
        "files": {
          "custom.css": "\/*widget.title*\/ {} \n\/*widget.title*\/ .plistaAllOuter {} \n\n\/*widget.title*\/ .plistaList > * {} \n\/*widget.title*\/ .itemLink, \n\/*widget.title*\/ .itemLinkPET {\n    width: 30.6%;\n} \n\n\/*widget.title*\/ .plistaHeadline {\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    padding-bottom: 20px;\n    margin-bottom: 10px;\n    font-family: \"Open Sans\",Helvetica,Arial,sans-serif !important;\n    line-height: 1.5;\n    font-weight: inherit;\n    font-size: 1.3em;\n    color: #333;\n    padding: 5px 0 0 5px;\n} \n\/*widget.title*\/ .plistaHeadline::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 80px;\n    height: 5px;\n    background: #f26531;\n    !important: ;\n    z-index: 1;\n} \n\/*widget.title*\/ .plistaHeadline::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: #ccc;\n} \n\/*widget.title*\/ .plistaH {\n    font-weight: 700 !important;\n    font-family: \"Open Sans\",Helvetica,Arial,sans-serif !important;\n    line-height: 1.5 !important;\n    font-size: 18px;\n    color: #333;\n}\n\n\/*widget.title*\/ .itemDate {} \n\/*widget.title*\/ .itemKicker {} \n\n\/*widget.title*\/ .itemTitle {\n    font-family: 'Open Sans',Helvetica,Arial,sans-serif;\n    line-height: 1.5;\n    font-size: 1.1em;\n    font-weight: 700;\n    color: #333;\n    -webkit-font-smoothing: antialiased;\n    padding-top: 5px !important;\n} \n\/*widget.title*\/ .itemLink:hover .itemTitle, \n\/*widget.title*\/ .itemLinkPET:hover .itemTitle{ \n\ttext-decoration: none; \n} \n\n\/*widget.title*\/ .itemText {\n    display: none;\n}  \n\/*widget.title*\/ .itemMore {} \n\/*widget.title*\/ .itemBrand {}\n\/*widget.title*\/ .itemCategory, \n\/*widget.title*\/ .itemAd {\n    margin: 0;\n    padding: 0;\n    padding-top: 5px !important;\n    color: #888;\n    font-size: .85em;\n    line-height: 1.5;\n    font-weight: inherit;\n    order: 5;\n    text-transform: capitalize;\n} \n\n\/*widget.title*\/ .plista_widget_imgwrapper {} \n\/*widget.title*\/ .plista_widget_imgwrapper img {} \n\/*widget.title*\/ .plista-powered {} \n\n@media only screen and (max-width: 575px) {\n    \/*widget.title*\/ .itemLink, \n    \/*widget.title*\/ .itemLinkPET {\n        width: 100%;\n    }\n    \/*widget.title*\/ .itemTitle,\n    \/*widget.title*\/ .itemCategory,\n    \/*widget.title*\/ .itemAd {\n        padding: 5px 0 0 5px;\n    }\n}\n",
          "layout.css": "\/*widget.title*\/ * {box-sizing: border-box;}\n\n\/*widget.title*\/ .plistaList {\n\tdisplay: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: -o-flex;\n    display: flex;\n    -ms-flex-direction: row;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n   \tborder-bottom: 1px solid #F0F0F0 ;\n\tmargin: 0;\n\tpadding: 0 0 5px;\n}\n\n\/*widget.title*\/ .plistaList > * {\n  \tflex-basis: auto;\n  \tflex-grow: 0;\n  \tflex-shrink: 0;\n  \twidth: 32%;\n  \theight: auto;\n}\n\n@media screen and (max-width: 630px) { \n\t\/*widget.title*\/ .plistaList > * { width: 48.5%; }\n}\n\n@media screen and (max-width: 375px) {\n\t\/*widget.title*\/ .plistaList > * { width: 100%; }\n}\n\n@media screen and (max-width: 350px){\/*widget.title*\/ .plista-advertise{display:none;}}\n\n",
          "structure.css": "\/*widget.title*\/ .plistaHeadline {  padding: 5px 0 10px; }\n\n\/*widget.title*\/ .itemLink, \n\/*widget.title*\/ .itemLinkPET {\n\tpadding: 0;\n\tmargin: 0 0 10px;\n\tbackground: none;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\t-webkit-flex-direction: column;\n\tflex-direction: column;\n\t-ms-flex-wrap: wrap;\n\t-webkit-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\talign-content: flex-start;\n}\n\n\/*widget.title*\/ .itemDate:empty, \n\/*widget.title*\/ .itemKicker:empty, \n\/*widget.title*\/ .itemCategory:empty, \n\/*widget.title*\/ .itemBrand:empty { display: none; } \n\n\/*widget.title*\/ .plista_widget_imgwrapper { flex-grow: 0;\torder:1;\t}\n\/*widget.title*\/ .itemAd\t\t\t\t{\tflex-grow: 0; order:2;\t}\n\/*widget.title*\/ .itemBrand\t\t\t{\tflex-grow: 0; order:3;\t}\n\/*widget.title*\/ .itemCategory\t{\tflex-grow: 0; order:2;\t}\n\/*widget.title*\/ .itemKicker\t\t{\tflex-grow: 0; order:4;\t}\n\/*widget.title*\/ .itemTitle\t\t\t{\tflex-grow: 0; order:5;\t}\n\/*widget.title*\/ .itemText\t\t\t{\tflex-grow: 0; order:6;\t}\n\/*widget.title*\/ .itemDate\t\t\t{\tflex-grow: 0; order:7;\t}\n\n\/*widget.title*\/ .itemVideo span[data-id=video-play] {width: 100% !important;}\n\n\/*widget.title*\/ .plista_widget_imgwrapper, \n\/*widget.title*\/ .itemVideo, \n\/*widget.title*\/ .itemFlashWrap {\n\tdisplay: block !important;\n\tfloat: left;\n\tmargin: 0;\n\twidth: 100% !important;\n\theight: auto !important;\n}\n\n\/*widget.title*\/ .plista_widget_imgwrapper img {\n\twidth: 100% !important;\n\theight: auto !important;\n}\n\n\/*widget.title*\/ .itemDate {\n\tdisplay: none;\n\tfloat: none;\n\tfont-style: normal;\n\ttext-transform: none;\n\ttext-decoration: none;\n\ttext-align: left;\n\tmargin: initial;\n\tmargin-top: 1px;\n\tmargin-right: 0;\n\tmargin-bottom: 3px;\n\tmargin-left: 0;\n\tpadding: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: normal;\n\tfont-size: 12px;\n\tline-height: 150%;\n\tcolor: #888;\n\tbackground: none;\n\twidth: 100%;\n}\n\n\/*widget.title*\/ .itemCategory,\n\/*widget.title*\/ .itemBrand {\n\tdisplay: block;\n\tfloat: none;\n\tfont-style: normal;\n\ttext-transform: none;\n\ttext-decoration: none;\n\ttext-align: left;\n\tmargin: initial;\n\tmargin-top: 3px;\n\tmargin-right: 0;\n\tmargin-bottom: 3px;\n\tmargin-left: 0;\n\tpadding: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 15px;\n\tcolor: #888;\n\tbackground: none;\n\twidth: 100%;\n}\n\n\/*widget.title*\/ .itemKicker {\n\tdisplay: none;\n\tfloat: none;\n\tfont-style: normal;\n\ttext-transform: none;\n\ttext-decoration: none;\n\ttext-align: left;\n\tmargin: initial;\n\tmargin-top: 1px;\n\tmargin-right: 0;\n\tmargin-bottom: 2px;\n\tmargin-left: 0;\n\tpadding: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 15px;\n\tcolor: #888;\n\tbackground: none;\n\twidth: 100%;\n}\n\n\/*widget.title*\/ .itemTitle {\n\tposition: relative;\n\tdisplay: block;\n\tfont-style: normal;\n\ttext-transform: none;\n\ttext-decoration: none;\n\ttext-align: left;\n\tmargin: initial;\n\tmargin-top: 3px;\n\tmargin-right: 0;\n\tmargin-bottom: 6px;\n\tmargin-left: 0;\n\tpadding: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tline-height: 18px;\n\tcolor: #000;\n\tbackground: none;\n\twidth: 100%;\n}\n \n\/*widget.title*\/ .itemText {\n\tposition: relative;\n\tdisplay: block;\n\tfont-style: normal;\n\ttext-transform: none;\n\ttext-decoration: none;\n\ttext-align: left;\n\tmargin: initial;\n\tmargin-top: 0;\n\tmargin-right: 0;\n\tmargin-bottom: 6px;\n\tmargin-left: 0;\n\tpadding: 0;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-weight: normal;\n\tfont-size: 15px;\n\tline-height: 18px;\n\tcolor: #000;\n\tbackground: none;\n\twidth: 100%;\n}\n \n\/*widget.title*\/ .itemMore {\n\tdisplay: none;\n\ttext-transform: none;\n\ttext-decoration: none;\n\tcolor: #000;\n\tfont-weight:bold;\n\tbackground: none;\n}\n\n\/*widget.title*\/ .itemAd {\n    display: block;\n    position: unset;\n    padding: 0;\n    margin: 3px 0;\n    border-radius: 2px;\n    z-index: 9;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 10px;\n    text-transform: uppercase;\n    color: #888 !important;\n    float: none;\n  \twidth: 100%;\n}\n\n\/*widget.title*\/ .plistaHeadline .plistaAd {\n  float: right;\n  margin: 5px 0;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1.1;\n  font-weight: normal;\n  text-transform: uppercase;\n  color: #aaa;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\/*widget.title*\/ .plistaFooter .plistaAd {\n\tfloat: none;\n\tmargin: 0;\n\tfont-size: 10px;\n\tline-height: 1.1;\n\tfont-weight: normal;\n\ttext-transform: uppercase;\n\tcolor: #aaa;\n\tdisplay: block;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tvertical-align: text-bottom;\n}\n\n\/*widget.title*\/ .plistaPetImg {\n\tposition: relative;\n    display: inherit !important;\n    font-family: inherit !important;\n    font-weight: inherit !important;\n    font-size: inherit !important;\n    font-style: inherit !important;\n    text-transform: inherit !important;\n    text-decoration: inherit !important;\n    color: inherit !important;\n    line-height: inherit !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  \tfloat: none !important;\n}\n\n@media screen and (max-width: 375px) {\n\t\/*widget.title*\/ .plistaHeadline .plistaAd {\n    float: none;\n\t}\n}",
          "widgetScript.js": "var itemLinks = this.container.querySelectorAll('.itemLink');\nfor(var i = 0; i < itemLinks.length; i++)\n{\n  itemLinks[i].setAttribute(\"target\", \"_top\");\n}"
        },
        "formats": 1,
        "hasVideo": true,
        "height": 0,
        "id": 954930,
        "widgetid": null,
        "kind": "list",
        "lang": "de",
        "options": {
          "alias": null,
          "baseTemplate": "list.css",
          "context_filter": {
            "device_type": "desktop"
          },
          "createdByTool": "platform-api",
          "elements": "Title Only",
          "flagPermissions": {
            "deny": [130],
            "allow": {}
          },
          "hardFloor": 0,
          "hidden": null,
          "isActive": 1,
          "layout": "Block3",
          "petpos": -1,
          "priority": "belowArticle,copy_of_belowArticle",
          "styleTemplates": {
            "layout.css": "Layout - Block 3",
            "structure.css": "Structure 3 - ( BLOCK - Adhint below Image )"
          },
          "toolVersion": 2,
          "use_sid": 0
        },
        "permissions": ["AD", "PCD"],
        "status": 1,
        "title": "belowArticle",
        "type": "predefined",
        "width": 0,
        "alias": null,
        "links": [{
          "rel": "self",
          "ref": "https:\/\/api.plista.com\/de\/widgets\/954930",
          "version": false,
          "identifier": "singleWidget",
          "niceName": "getSingleWidget",
          "path": "\/de\/widgets\/954930",
          "method": "GET",
          "prefix": "widgets"
        }],
        "updated_at": "2019-07-17 10:48:31"
      };
    console.log(_widgets);
    res.json(_widgets.data.items)
    
    // res.send(' path to users')
})

app.listen(3001, () => {
    console.log('server up and listening ')
})