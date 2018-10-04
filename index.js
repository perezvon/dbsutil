(
  function() {
    let utils = {};
    
    utils.removeWhitespace = string => {
      return string.replace(/\s/g,'');
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
