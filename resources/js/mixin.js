export default (Vue) => {

    Vue.mixin({

        methods: {

            can(permission){
                if(permission && this.user && this.user.permissions){
            let user_permissions=this.user.permissions
            var permissions = user_permissions.map(function (el) { return el.name; });
            let target=permission.split(',');
            var result = permissions.filter(function(item){ return target.indexOf(item) > -1});   
            return (result.length > 0);  
                }else{
                    return false;
                }

            },
            getUser() {
                if (!this.user && localStorage.token) {
                    //Decode to idToken to get the user object
                    //  this.user = Utils.decodeJwt(localStorage.token);
                }
                return this.user;
            },
            capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1),
            displayMessage() {
                alert(11111)
            },
            scrollup(top = 0, left = 0) {
                window.scroll({
                    top: top,
                    left: left,
                    behavior: 'smooth'
                })
            },
            isLogedIn() {
                // console.log(Vue.localStorage.get('token'));
                if (Vue.localStorage.getItem("authToken") != null &&
                    Vue.localStorage.getItem("authToken").length > 10) {
                    //logger(Vue.localStorage.get('token'))
                    return true;
                } else {
                    return false;
                }
            },
            get_loc_stroge(key) {
                var retrievedItem = localStorage.getItem(key);
                if (retrievedItem) {
                    return JSON.parse(retrievedItem)
                }
            },
            set_loc_stroge(key, val) {
                localStorage.setItem(key, JSON.stringify(val));
            },
            variableBgImage(variable, image) {
                if (!image) {
                    return '';
                }
                let baseurl = (baseHref.substr(-1) === '/') ? baseHref.slice(0, -1) : baseHref;
                return variable + ':url("' + this.clean_url(baseurl + '/' + image) + '");';
            },
            str_encode(str) {
                return btoa(str);
            },
            str_decode(str) {
                return atob(str);
            },
            set_image(url) {
                if (!url) {
                    return '';
                }
                let baseurl = (baseHref.substr(-1) === '/') ? baseHref.slice(0, -1) : baseHref;
                return this.clean_url(baseurl + '/' + url);
            },
            onlyNumeric(e) {
                e.target.value = parseInt(e.target.value.replace(/[^0-9]+/g, '')) || 0
                // return inputNumber.replace(/[^0-9]/g, '');
            },
            NumbersOnly(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            DecimalOnly(evt) {
                // console.log(evt.keyCode); //keyCodes value
                let keyCode = (evt.keyCode ? evt.keyCode : evt.which);
                // only allow number and one dot
                if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || evt.target.value.indexOf('.') != -1)) { // 46 is dot
                    evt.preventDefault();
                }
                // restrict to 2 decimal places
                if (evt.target.value != null && evt.target.value.indexOf(".") > -1 && (evt.target.value.split('.')[1].length > 1)) {
                    evt.preventDefault();
                }
            },
            onlyDecimal(e) {
                let kval = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                if (!isNaN(kval) && kval.toString().indexOf('.') != -1) {
                    let arr = e.target.value.split('.')[1]
                    if (arr.length >= 2)
                        kval = parseFloat(kval).toFixed(2)
                } else {
                    kval = parseInt(kval)
                }
                kval = kval || 0;
                e.target.value = kval;
            },
            ran_inx() {
                return (Math.random() + 1).toString(36).substring(7);
            },
            clean_url(url) {
                //return url.toLowerCase().replace(/[^a-z0-9]+/, '-');
                return url.replace(/([^:])(\/\/+)/g, '$1/');
            },
            truncate(value, lng) {
                if (value.length > lng) {
                    value = value.substring(0, lng) + '...';
                }
                return value
            },
            valid_key(str) {
                return str.toLowerCase().replace(/[^a-z0-9]+/, '-');
            },
            async getBase64FromUrl(url) {
                const data = await fetch(url);
                const blob = await data.blob();
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64data = reader.result;
                        resolve(base64data);
                    }
                });
            },
            async getFileFromUrl(url, name, defaultType = 'image/jpeg') {
                const response = await fetch(url);
                const data = await response.blob();
                return new File([data], name, {
                    type: response.headers.get('content-type') || defaultType,
                });
            },


            async svgToPng(svgDataurl, width, height) {
                return new Promise((resolve, reject) => {
                    let canvas;
                    let ctx;
                    let img;

                    img = new Image();
                    img.src = svgDataurl;
                    img.onload = () => {
                        canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);

                        img = new Image();
                        img.src = canvas.toDataURL('image/png');
                        img.onload = () => {
                            canvas = document.createElement('canvas');
                            canvas.width = width;
                            canvas.height = height;
                            ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0);
                            resolve(canvas.toDataURL('image/png'));
                        }
                    };
                });
            },

            contentScroll(scrollTo) {
                if (scrollTo) {
                    var options = {
                        offset: -100,
                    }
                    this.$scrollTo('#' + scrollTo, 500, options)
                }
            },
            handleNewLine(value = '') {
                if (value)
                    return value.replace(/(\\r)*\n/g, '<br>')
            }

        }
    })
}
