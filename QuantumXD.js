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
                "id": "Quantum",
                "name": "QuantumXD",
                "color1": "#32c392",
                "blocks": [{
                    "opcode": "block_02016fc1bb86ba02",
                    "text": "[ebb1031d6b9920ac] More? [00807a203a75d8ae]",
                    "blockType": "Boolean",
                    "arguments": {
                        "ebb1031d6b9920ac": {
                            "type": "number",
                            "defaultValue": 1
                        },
                        "00807a203a75d8ae": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }, {
                    "opcode": "block_2e244a151581f4dd",
                    "text": "[42a2523e3753e326] Minus? [665286116839e5b1]",
                    "blockType": "Boolean",
                    "arguments": {
                        "42a2523e3753e326": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "665286116839e5b1": {
                            "type": "number",
                            "defaultValue": 1
                        }
                    }
                }, {
                    "opcode": "block_957f185bdb737386",
                    "text": "Key pressed?",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_243d29f8ca5d74a4",
                    "text": "Stop project and say [c7e96afcf8e0ff36]",
                    "blockType": "command",
                    "arguments": {
                        "c7e96afcf8e0ff36": {
                            "type": "string",
                            "defaultValue": "it works!!"
                        }
                    }
                }, {
                    "opcode": "block_1ae36e15d182aa1e",
                    "text": "Repeat [a3e742ee31fb617b] repeated \"random\" times",
                    "blockType": "reporter",
                    "arguments": {
                        "a3e742ee31fb617b": {
                            "type": "string",
                            "defaultValue": "hi"
                        }
                    }
                }, {
                    "opcode": "block_ed429f857dbe4573",
                    "text": "return [32f79dfd13e388c2] Troll",
                    "blockType": "reporter",
                    "arguments": {
                        "32f79dfd13e388c2": {
                            "type": "string",
                            "defaultValue": "Hi"
                        }
                    }
                }]
            }
        }
        async block_02016fc1bb86ba02(args) {
            if ((args["ebb1031d6b9920ac"] > args["00807a203a75d8ae"])) {
                return (("yes"))
            } else {
                return (("no"))
            };
        }
        async block_2e244a151581f4dd(args) {
            if ((args["42a2523e3753e326"] < args["665286116839e5b1"])) {
                return (("yes"))
            } else {
                return (("no"))
            };
        }
        async block_957f185bdb737386(args) {
            if (Scratch.vm.runtime.ioDevices.keyboard.getKeyIsDown(("any"))) {
                return (("true"))
            } else {
                return (("false"))
            };
        }
        async block_243d29f8ca5d74a4(args) {
            Scratch.vm.stopAll();
            eval(String.prototype.concat(String("alert"), String("(\""), args["c7e96afcf8e0ff36"], String("\")")))
        }
        async block_1ae36e15d182aa1e(args) {
            return ((args["a3e742ee31fb617b"].repeat(vm.runtime.ext_scratch3_operators._random((1), (100)))))
        }
        async block_ed429f857dbe4573(args) {
            return (("nope XD"))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);