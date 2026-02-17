/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "REDID",
                "name": "Red Blocks",
                "color1": "#d62929",
                "blocks": [{
                    "opcode": "block_1809a2096e61cb9f",
                    "text": "% Random",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_059774820a4f65a4",
                    "text": "[51e9a034efb7020d] % [7aa99253199e1a15]",
                    "blockType": "reporter",
                    "arguments": {
                        "51e9a034efb7020d": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "7aa99253199e1a15": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }]
            }
        }
        async block_1809a2096e61cb9f(args) {
            return (vm.runtime.ext_scratch3_operators._random((1), (10)) % vm.runtime.ext_scratch3_operators._random((1), (10)));
        }
        async block_059774820a4f65a4(args) {
            return (args["51e9a034efb7020d"] % args["7aa99253199e1a15"]);
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);