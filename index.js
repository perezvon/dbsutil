(
  function() {
    let utils = {};
    
    if (typeof exports != 'undefined' && !exports.nodeType) {
      if (typeof module != 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = utils;
      }
      exports.utils = utils;
    } else {
      root.utils = utils;
    }
    
    utils.removeWhitespace = string => {
      if (typeof string !== 'string') {
        throw new TypeError(`String is expected, got ${typeof string}`);
      }
      return string.replace(/\s/g,'');
    }
    
    utils.validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    
    utils.slugify = string => {
      return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }

    utils.iterator = (arr, field, comp, aggregator = 0) => {
      arr.forEach(p => {
        if (p[field] === comp) {
        aggregator++
        comp = comp + '-' + aggregator
        iterator(arr, field, comp, aggregator)
        }
      })
      return aggregator
    }

    utils.pad = (number, digits) => {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }
    
  }()
);
