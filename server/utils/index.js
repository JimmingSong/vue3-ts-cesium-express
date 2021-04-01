class ReturnObj {
    constructor(value = null) {
        this.success = true;
        this.value = value;
        this.code = '0000';
    }

    setValue (val) {
        this.value = val;
        return this;
    }
    setCode (code) {
        this.code = code;
        return this;
    }
    setSuccess (success) {
        this.success = success;
        return this;
    }
}
module.exports = {
    ReturnObj
}

