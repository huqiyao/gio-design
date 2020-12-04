/**
 * @jest-environment jsdom
 */
import * as module from '../utils';
const canvas = require('canvas');
const { Canvas } = canvas;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606823912493&di=291fcc824e1168b41b0876a619a565aa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fde42849c2bb85b153d28e7f93341f54501e9f2b618f06-2PtOQh_fw658';
export const dataUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAwICQoJBwwKCQoNDAwOER0TERAQESMZGxUdKiUsKyklKCguNEI4LjE/MigoOk46P0RHSktKLTdRV1FIVkJJSkf/2wBDAQwNDREPESITEyJHMCgwR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAFyApIDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xAA5EAEAAgEDAwMCBAUDAwQDAQABAhEAAyExBBJBUWFxBYETIpGhFDKxwdEG4fAVQvEjM0NSYnKSgv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAQADAQEBAAMBAAAAAAABEQIDEiExQRMEUXEi/9oADAMBAAIRAxEAPwDyYbYa2vCG175K++Zdw884S/8AfJWQr1wG39bwfGTDe5gD2vJVmH7ZKwIFemHxu5KrBt/tgGvVwfesPo+cm+AOdvGH75PF4MA8vpg5rw5POH4wCGRrJk8m+BPRvBthqt8GBLchWSsnjAn3yemTnIG++BD+2Hh5w9tm3PphIq7nONAS9sib7uMRSRtjammjfN85NVWFJ5ywgiJ5wmm9thfjNmloMoxQ5yddSLJrKacnxVbOP+CsbpPnOnHo+6Agn98v0+jiQpLzlfLI3OK5eloSYSHc8YIdMyN+R2fUzsaXTdrSbY0OmjFaD2znfNI3ONcU6TUsY/GB6eQsac9AaANoYXpovgxPNE/zriaHTMoMgVrF1ullDT3F3eDjPQ9L0sYtUbt5dqdJGTVCLxWP9frN5ea0ejTSjMLvmjjHj0yaSVfkz0h0cSNRiAemVS6KmgqI4/1PXI83o6DGZs87rmbqANScSjtaP1z00+kO3YrtXfOPr/T5M5EbWTa+lOa58k/p61ye1uq4wIrfjOvrdARhQfmK++VQ6Jlp7lfmRr5zr/pE9a55BQfC5Z+BLuAE4zq6fRURotXyZpOjoi0XSrmL5Ys4rhy6dBvdTg9crnp9ptuu+/gztS6RC+3xR7ZR/CM9UjVAWv8AbE8kp6VyzTSFuw+cjCgXg3DN/V9OxAjFB/YyvX0yCaZF3BfbNzuVPWsVN1e/j5wSoKD3XLiFd0m9ig93z84hpSk734XNSxnFVtehkSq+Md03u7SNt8YJxRovbly7DCPGTw77Y5FrdN9ucBE7qv2cuoW/HjD522wdrdPN5Pna/GBPveC69fbD7ftgea9MIZ4D7uDxd5JFpXpksPRwo8YLLrBeE25wJfzhva/tihbRjL45MCL/AMcF805NsmEDIe+RMlPN4E98mxk385PvgDxWTJk8YArIbbY1YP2wDxvk93Bk++A3P+MmDxeQwCnrtgwpkwDXxkyUZMBd1cnJzWStsLzxgLh4wX7b5NsA+dsmTy4eDAgHIfbCcZD3yezgRwDv6ZHIbemAfjJu75N998HOAcDxk998nveBC15whg38/rhMYCGGt/TBeRawI87ZOMl5MCYHjJ/fJfpgBv5wi/OAu9zjLCLYn2xVizS0+4ri+Ey7T0ZX2yLrzWWdNpki0qn9M6el03cjRZ6Zx67xvnnWDS6RmJV1miHQLGq2SnOrpaEY7pSec0dkaABc8/XmsdZxrj6f05jqUlxT9836XSRiBRfxmyEB3Q29ssdNC99uc49ea1ueORmjpgInxtgA7koy6UHusvD2fm/tnO91ucxTKJVBveK0GXTimwcZmldvtk9mpyLPcwmoLXjM05o04jqMZZWvV1NKZZ7ZqKaXOT0+rbedHSksacstce+GgL2ySCtz2xbWN3klPZ38Xl9mPVX2CplMunj3LRtmiCMsCl1Xtk9q1J9ZZ9PGTabn75XHpIx0iNGz+l5s8/G+B4y+9X1UGlHwGxRklAWgEDHNy8l77cZn2rWKZaY2HnbF/ACKAG/OaA8/fI7m+3nNe1hYw63Tk9Q22N8y6vRd+rJq7eHxnWre/OIQKfVc1PJYzeY4f8A3Vbcvu40OiIhZclXO1+ESfBk/CicelfBm/wDWs+kcU6GpylQqc1lep9PI6TQ3e/8AVzv/AIcaCvvgdESq8K5Z5rpeI8lrdHqRjKTFC+fbM0tOUUsQr9c9hr9LHVGKfGcvq/p9Qut15zvx5pf1y64z8cOcbVkgnjAxe4S29/jNOtoSBEVvKdSKHab1u53l1zsVgKq7Hpg2v1+cc01K8cuNp6Kptavpl3EkKlFvLxiJRX6+2Xzk9/5boKsP6ZWK+AfjEtVWn64At2yxiu5W/p4yKGxvLy5dQD8p7v7YKuuMgMsZqJRvhCg1gFwm5eR+++AMn2rJw4ecAPxi88mHbxgwJV5PODD+mBP6ZPGTx5wffAnr5yDh5u3bBfGAfHn9cN74Pvkv74BHI7v++S+HIYBs9D9cmC3Jg+GHbfFvfCPp+uDz6+MCYMnv5yVgS9yuMJXrk598g+/GAw3eS9sXfCLgGsH/AC8F741mBFrzkt8ZMF+2BLfLkye2T4wD+uTjJe3+2S/TCxMmS7HJ6YKl8YVr1wZLr4wiLTgXI75AXerwGgo7b5p026UKfNcZTpshEGvJWdTotGGrItpdkqrzHfWRvmau6KFyp7UfXOvpaMYh7ZT0/TR0vBftmm6azweTva9PHB1Ko/fJGKo1eLBJO9ma9KNhdPuZ57XTMgadAWPvl4Ejjnzk/DjQhXxhjQ05GdIwAr0cEoU3hnJO6NbhY+pjdwll8ZLVms8wVHjjMOqEZV981akq+VbzNrI++HXmMeq/mocoW2jdNq9cv1W2/XKSC6lgojnTn8brR0Syar4c6mmhRfGYtDTIAxNuQ9M0xeEOcVx6aCW1Hr4wSSt8WMq2wL7eMlrMizuDjjnJOW95VF32xhvkunJ9XBWl+N8S7PbAyo384G6598iyIP5SvP7ZF22wSTc8uK8hlXFhu1zknIOfHjAUb4L7pUuxlAZLu84WVUHnbFU7grY5yW1fldvXBkONPPHGSxfjEVFb44wx5+N8Jiyth9cLwF+2Iy8ng29sMFQ3xqWGAXbg84stEmNhtjmw1ytY0Uujxy4lsqWObqfT4rtG99vQzBrfTpRnJjEThsz00YxecEtGKbnOejnyWOPXMteQ1ej7WtwD0yuUJRhQJfk8Geq6jpNORaX9sxanQwdgzrPNP6z6V5qEYM6BfdfOSRF2YB7mdyf06ER7D8zmHW6LUjI/Kp5+c6Tyys3ixzdSowYx885RUhAeeKzoavT3JED2crhoVNWqPPtnWdTGLKokEdLjdd0ymmruz1y7qFXb+W+fXKhDi281EQ5wL8Y3tti+PXKAu9X+2S6yb4KrCDeT19sHzeS6wJu/GT1ybZB2wJ8OBMPnB42wDg875N/TJd74BHbJW23nzk9HzkuhpwIYxvzeKevrjGzgSvn9cmG/n9MmD4WvnfBxhyXgDDd4PXfJa1tgHh3wH98PjnjBvgH75OPXJg/fAOS8Hxh9DAg/Lk8875K3yeMA+cnOTZ8GHwmDUvBs84d6wf1+MA8tcZHJXjBeAcGTJgSvPjDCXbKzxkTzhib7l4qxp0wnIYvaryZ6D6X0rHS7tQGT5M5X0zpycxYrvY+mejjHtgAfGeTzd/x28fITo2/bK2Vvx6YupMHnfK++24vOeKvVzPjVpIvIZt0pB5zlw1JXX7Zp0ptC7Zi/rVmuqTjKO/6mVyUlUmx3EzKTNm6xvxvyop641z9cWSmUryWfbM+t1BCCDycZm19eRqLYnkPGY9fW7otr7BiTXTnlfPqhFs9DK3UJQW7r3zEzbqgH1x4kkO1s59azc5dPkXxO5qr2vLoaQe+36GLphVpw7VmirLNrOcMW/Rg9shUPXfnLBPi+MqFI7/O5hHZ8o5GbFkZb1jLu35NsRSr8pvWRbTfgxYG7klfJhFq/viL+a+a8YJS39shh+4p59MC8HO2+Vkjzk7rSuB3x9XDRb3fOGxp8OJf5a4cI7UceMGHG7X7YO7tFecDL8pWV3vTe27lwwUtOd8ZHmuMRlv8AOPFs345wJ3XIPBh2v4xTct+cJu36b3jA178+9Y3chfrldrvx4MYS/gvJgsHwXsfplkUADKoq7uMS3248uGbGiEgVftjsirczxlbRv67Yy2BfGWVzs+l1pX675mnMHffLdZ2S6/vmKc29l+Ky/XTmTF3cVfrglEkb5TGVu/j3y2KqAb4lsLzGTX6ElbHZc5+v0mpEYxGl3X0zvxDhxZaZOKUeg5248tn65dcb+PJ6umRUVXjbKWCBRXzne6noowvtLvznN1OnV4QPXPZz5JY895srCj5p98V3zRPQkRSq3ylgjuZ0l1izCO2B34xpFNecVzSA3kv1yeMm+BPGB9P65G/fJvgHJ4yN3Tk5MAb3tkMmQwJxkusnjYyfbAJzvh2fXBe2S9vWsBvs5MW/fJjDB+dsC8f2wv8AXBgT3yfasH6ZP3wD4yceNsnrkBwDkwYawAF4W/TCHqZKrnAHjJkf1yef7YBuvXJgTf1w364E8YcB77ZMA7+fG2RyB5w1tvgCvXJb4yOTxXO2BBrZy7Sj3yO1H5ynz7Zd08JMxgX/AEzPXyLHo/p2kQ0hQ3zXKdHtlHTL+CWU1vjzk1V583u29PZxPirWkIpmZnTYvvvlmq/lcyM0lufq5mTXok+NUNRXd3zRCaPOYY6hEsT4wx6mPd+YD3MzeVb5ayXUlHB+Pslm+ZZ6wgli75RPXZSqOwb3icmNOo6ktxSncrfGjpylEWKnhTF6MZBQvr3Zp1UClBCgNisuYzrG9PU+4a8pz9svhohSVZvXrjRGr7hU2vzjgJsbnjin2x9NFih+UN99jnGhKinfw+mSMjh29MNR827+P8ZlBW3ZvbZqskVSt7resJGNnbJ9capRbKG/TABwWbjxjXsXtg71KkU+xirab4iYKlberisgL9QvCK3QIYKt2/TC/hRTJSCcW1hI/mt8Ye1tvnxiqJuL84aWMaKVr4wwiAU3RWWQAkVyF3iJpJx7RDxQX++LIKa3Xl9stTuQrddsq1b8b36YJVaKgPLzlgLYcVRgQHbxz842mWPjy4CyTY+xh4jR67uN22+A9L3xJNe3jALKjatsMVRUq998qu7D15ywoN/O/wAYDiVa/bDd+KMrKW3cODGvbGC6FR3xpSaoAyuOwKb+DCKCqY/GLCzicttnGYOosnSpfgM6SKWFZi142tRX1TLF5/VMEil7365dGdFDmZQUBHyPOWaY3fGZrrmtJOzbz5yyKV87ZREV8HtlwNUc5JWbIM9OM48XtmafSCWAerW+aYKNLeW7SjQWZ057scuuXB6vRIG0RDy5yNeLKTuFc/Gen6zpXUiggehnB6zSNMqVW8l57fF3K83fLmpRs374uPIR5N8Rec9UcqH64efbJ98mEBK/84Kw142wO2AafbJXj+mSt7wO+BMnxk/pk++BDJkyYArfCfpgp9d8N7YE/XJkyYwNeDDz/nJzgCq9MH7Y33wJgQ2w+u/vi4btwDy3WE+2D5w7YEbPXIpw+mS9vOC2/XAlGEMHJw4ecCV6GTzh++DzgQPjGo/xinPOE42yBit8nPzgHxgvKJVZK98n65Dd/tgPpBKVPnO99P6SMQkl++c36f05qam4J6Z6HS046emESvbPN5u8mR28fOjZEoKyjUnTT5yybexfplE2mnc9+c8VuvZJhJqruZj1hFaEzTqVvW2+UsSXo+Kyz9dJ8iglbwvxjd0R4P6Zqh0s5G33Ay16MhHu1InxeaZ9oyw73YiI+c1aMenIXNJL4q8za0+1SMT48ZmNefcRiX7nA5ZPiX668uohADTjXj4yrvlKX5ktdttn4cz6ZNRnx81+2XR0U3JLTwmYshMXRdmKBW/++PX5bjvXkecGnBasDfdH+2Wxh+G2F35G8yaWKsLv5Hw5YDJ2af64JVe21+vj2wKjuVI9PJmQ8S0tL92sMZIt36NvGVslW9/RwsrKdvfH1Vkk8nOLbXjZrEJ7gnzjWDT++A4UV6lOEPJyYqrEpCtt8eNhXqb4SoID7A4IlNu64Bu63trGiDMjzVi+2QOFAG3q/fGC7p5KPbEk9zEdg3axif5T3KMqVK/MguzXx64uptKqvw1+2MtTorYtXK5y8DdFuCFltV7q5ZEoD9fnEYvcC70P65bW9W7G4YWkkgq7vGJTOwx6uVtkTi/OCTUdhd7a/pghUIFbWb0eMXuZO3jbJ2yeUPMn+xkQie3v5wG25Uo84SV2r+uUMmwvf2NjHi+W/nBi4kHAb+brG7633+cpJRG+X9jGiybftjPiWL7t2sffxiahCqBV8+MUajQ36025EZDd1zviRljnAJ8DJ43uj++WacE9MZDuVAvYy2IRLTfJXWX4kI1uGO3WxXxkB8ZGzY/XMppaADl84+nLtKrf1wkfOLKXoV9sRKtlEY75xvq/RwYsowuXgM60ZLtxlHWwlOCxN62fTO/j6srh3y8bqnbNET2yr++dHqunTUbbb3fGYGCKjYZ9Pmyx5bC+NsPjA3fnJWzmmUbvJXrhpfDgdvP6Y0BpMnz++RrxgXffAmDzkUvbJ+/3xAcnjxir/nCO3inAl/tkvfbBdc8uTzyfGUH7fvkwffJjV+rCz0Mn/LMl3hdryIChe+KuFqucS7cA3vjXWL5w7YDGHzgNt8mBA9sNcZPnJ4wJt/vkyO2TAn7YL9cL5rBhYPjIO94L33w4QV98mBfTJf2wJZzhLXbFXLNKpIA24vwd/wCjaIaJJju505oCG1Zk+nQYdODe5mqSVnzfLbens8c+M2qpe2UMt0XNUk3TZzPJS285R3ipbsUrENNX8q+uFbdwffLdKUYvk9jNxbfizRlrwL7jbj2yvqNSUmpTX35M0ymdu7t75k1Ik2o2+44/rE/WWMmUqbReQy2OgE7W3xeWx6azen2cu09FinNHKt/pltaDT09O94xEOT/HGaSFA7O290OAIyKO19B2/fHiBGgUPEnMWoBW1D6h5+z/AGw7XRJPnn4w7OyFeebwdqCCPpe4nzmdURKpVTa0wygpUXjeng+MBFrY59ecaHolpxkCMUSyx5TxhnE4dq5Mt5L5H9sVBUQL97wqiUZDF96ccRak3FfGGqEd68PqecENzYprhMBy0U38YxKiVmwgXiku0pNlB+cDtBUd13+MIcTwNW8YYtTvdVt9srBIkQ4LVxt5WWW7fGMDtdq38fGAeHmuME5EYgNqVtwGABlXgN/f2wG3pUT1EwAO6+f3ySkrvucq8BgpklcBdcVgWD3SZVYu3vlka3AH1XzirW1V4DF72nwGzX9DIlgySUnZQ32yci/pXn4wEiSAvO9f0yMg2La5eMv4sL2C3J7a4MWYApwcrwY4Lv8A14Pj3yMYtEt63r0waygooKXwbX/tjd1tD7AeP8Y+pIChD2PGU9wbcHjNC0QeHY332xvxdwUMqBfKHzzkqJ6bcZBcSbC69XGe1K7nnjzlJbujfjfbHDxLzzXn9MIZiA1TXD6YsWV1z6gjjjEdqK8GVaiA9ox8uL9JrTGQR4rCU8b+cwHUNsQuvVzTpaqx3AzFlaXsvA1lbHyvPhxJalJX2wd7LkMkTFkVHkoyyXaw332zMSL329TLWQw9PfNz9Y6jkfUGI/yFKohnJ1YRG12res6XX6yaiMgBsc5OrqElp3Oc+l45ceTr9VzlAHt0w+W7yvu22K+2Bu+bxbrbO+OQyV84t3kcVdvfAK2eMC+MW/XJdf8AnLIDfFYF85PYyO/+2BL5Qw34xaAyG2+A15L98FmC6bwHv/l5MTu98mBevxgXfa8bgxFyf0Bd6vBkyPPNYB++G/TFKvCO+/GMDGG7OcXzjffAPnbDXo4pzzjHzWBKwJhKrJgSvSsVKcb0wV6YAyYavzkfnAGT3yb+cnPm8CFPvmroqNUJFmZBpzR0mqw1QSzzmevxZ+vU9MjplPjG1JWUOV9JKMtESuP0x5tb858zv9e3j8UzGTRd+cq1DtN93LZSTYo+Mp1ErdvJP11jNNb3L9jG05Ssoq/UvLIwJ7gbO+2+adPQjLa19SnNbIWqBZtKFefGWHTtdwj6ltOaodPEOBr23x4xiAWvptxmb0mq9OJSdvanNgjjgg2AenJjUBVXX7YIumFKp75nROwssR8b04HZ3t3uzdMjIKrtr3bxqilpXrWNAtWhs4qtsMSSNgPzxgC38r+bwGNTaoic5P1Q3jIKROR2Ew90YytEPdr98IlUNxt8XWSriDucD64AmDK4oryPn/fERJJQl3XptkViJIavZrY9rwSkNVvWzv4wphuVHKLuXjaZV3VG55r2xFOwkbSHy8/GEkiI2FXXOAzSNFtJXhwFBV7c05JJJ7ixTbfzgtq35v0xECQsWqsd/TbDpoK3a787b8uIy/KdvMvOSiLAE4bF8YUVJKiq+nplgUWp3LdF7ZXELZA7bUPOHUmEpJ4aMqDKXIbWcv8ATHItdg0hct+MTRBZJWztflx4y7NOVbslbrIak5Ea34drd3JE/KMmlbr3yuIyn3I93BeW7FylS7gD64ECohE+f84O5lKo0F8+2FQ07Wr5T+mLcQBFvdC8gfuqOwgeXlxEXYa2tb3cMpR3buvTw/5wdq2qRttXdcoqYR3taed98WcYy3Brjjn75cxI7Xfv4vEla2x29ZP9DLop/DRt+214/wCUbS1xmSH8t+7zmeUZSkIK++2UXdzW9h/zbGJTGiKj98qjF5WI3ymW93btJd/I84xKtg7ndEL9sbt0wpbrg84kZAizYvpfOHvgtuoejWRGbXhCMhiLvwNn3yR1y+2W2aZSjIqIDzbsZj1/yytjXq1d/DjGub/2vjqCbce+LLVouj5MxSnasUD0vBGaBa78ZPVtujqX459Mu73s2PHnOfDUGVDxmn8Tt0l5ozUn1z6/HG65J6qNieXjOdrANKL6mWdd1J+LIVEXMEupXZds+pxzcjwdX6tUwMg8mZ3qB4ayt6j1TOklYamVebMRkcZmdfnEdYXky4NLI4vB3GZnWPVwfi++WQbCZkZmYzVfXCat+ceo1d5fjB35nJq7Y42ZMwWM3B3Le+KC8ZbCC+MlsXC0++TLuz2yZNi4u4xVHGk+mIpeIyHjBte1Yb29cmNE++Q4wG/OMV4wCHG+ELK/bIG2N5wBW7hNz0wYfPDgE+3OT1wmCt8UTx5ye+T5w17be+AP74HG4OMVrfAHDzg/rhyHGAPm8t6eLPVAQVOcSjzZlmixJi3t5Ml/Fj03Tabp6JFTjxhk0bu2VdJqDolDxy75Yvc0J6Z87ufa9nF+Kn80qE3y+HT7FhfzjaOgXco3XnNulpxIljx5zFuN2q9Pp49tNbemN2ETbLyIbxyTiUKC+zTmNTVDIi8Ued8RkLvu88c5awE8fDvisZRDtqvJ64aitlEOF9jK2luJv8Xlk5N0iHuYhIGiN3675GoBBk0AvlCjJ2g1bH1K2cZj3CyuG/lw9hWyp6f4wAQZI2XW1bYZEru+14v/AJ4wkgsO5Tit3/fF/E8HcvqOAO7tlSxe793GEVqzwi4sqlGpF35Qp/TB+GTHuJEjhG9vnzgFZacmn8rtTtWGcYzgMaELv2wwksO3UBA5qv64uomnK4ICWC7OJFAqUaQihwuz8ZIxNMG7Hh5/TITZFkivi0/2wS1Ip2SArdOR9z1y4GSLKhSqSt3GRlFBBHcfOZ4q90UsERPFuxhjJZUqSELrZ9z2xhizsY9g1YN/5/TFk/lNNVUr1oxpTsZXdKbb38ejipGUwK7t7top8YgMJKMVukuvPpWLGUXV57hbr0oxoxCXaF823W3u4lhrTIxe2rHgfHOVF8YpGqULXerxZ6n4Zcaa29NsXUklEvy/ltE4+3xg09U2a25F5XBhiUlBat87Kvr/AIyxRiVb71lbJlEmoykog1XrgHaPaLEN04yUw7JS5UROKf0K/fJpjKV0Atl/2xLJSpo807ffLO2JF7kfQecirIgN7UeKwd3c7A//ALZTckAAPVceMmJYNu/HP2xiYs7QFlKSvo7fBh7Y1cQX3FrE7kiK1fO9uAnJ4oDa8QxJQlVnaXs35ymRKqWvc2/3y8pG5C+g2/4MWXcDUdvm8s0Z3TE/MKevONCER7TuH1TnIzTnYvayzJDU1LojFviizKD2SG47vpvWWQG7/CeN26MJqal7w2827Y8ZEmg+zufvhnaWRpm8hNr9v1zN1MkajTFLo3zYx8kYvqb75l6iEe1O2RZtTsYk+krm6knuqKJ+j+mLGR5JG/kwaxGMqbaxSiW247n/AIzpkaladNFs/rl2vOMOnky2o8ZRpNF1W/jMX1bq+zppRpquTLxz7dRju/Hnuv6mLrSBSl28mYpa4uymJqvfNY23ldU7v2N8+xzzJI8Fv1a6q7DeL+IvnK68m+E3zWRDd673hJPOKFYQaxkDdzW2AV9cPD65KHAgrzjRtrFPSseLWSi6AuXwj7OU6aL4vL4OculXQgGXQiZVDxeXRS852rFm3pkwW++TIqqXLi3zvkV8b4OU850YRvJe2R8b4Lr0wCbYx8b/ABiF1zjGA477fvjbYg4xxkBr5PnD8YB2yftgN5/vka8Yo5BwD6YdsGS98CcYMjg9cCZLrAtH+cF74DhbRlulpy7hdt/OUBJdts19LJJDL81Znq/Fjv8AQaOo6QIVXObYaBGVyBvB0Mx6eLVWbGbCDIts9s+d3btevn8VxiDWxhbG7T75Z2lbm+Iwt3uvTOVbhe5XZvG3XZL9EyRhAluP65Y9p/KGBSxYu5Xub4kkGxb/AEy9TlN/bKJ2u0a93IsqMlPX7jihVWRffYyMrKa29MVirQfo4aGXcHivFvOKyP5UK5BdskISXjfx64JRkNLbyGFgKjdDtujeNenMsQ9SQb4JRtT+W/NtZJWQqJ3eqnn0wAyjGVCVzTVLkNTuKpKeKysKd9/UN0wyAqUQrw4U8vzRskBvY/1xWCwGS77flt2998kYb2IrdDu1iSlqQaYrE3/KG/vj/wACxs1aJIDfahSefjJIgXYtIieP7ecb8RaURBqo7YIzHUWcWx2fQ+Of2zQYJDsgJXNN/wB8qIEVlNQldN0X6VjTnFGIjbVLdPrlRIlrEZyNtkQRcQOziaZHuQVdhp+cZi6kKIkUbF5rbcfXE1wFnp2SN7q0+D9PfFWUuyemSYzVlZ/X74xfhvxiRJgJLztwHF+7jQl26XdPa2y27PT/AGxDS7FiNwlQ2g8cN87uNpxNbSJXKlSkq3zV+hhmk1HU1JkiT2SpV5fTnjZxx73uCQBQiAvzi1JnQVtclK9AV+2NQx7a01DbdQL9uMKaw0ojGwQu/wBd/OSY9kR1EtsjFtQ8Yuod0ztooKqqT29MJFHvl3WFb7P/AD2wSLoHYdyhGrKLfvg74y/MSlGI0De/+cUnEPzSJJsVuxftvhlLTi70rsvK5BZ3xjHaVgbqZCbIWMXbe5FX74IRGNx01+a/pjSIgK17XbkCitINertjxBLlaet7ZXaNgI+Euvlxu9Su1V4DYMJi38tVFr2DnAxHiT8Vz++JB7ruUT2FUxooF1z5q8FgsGrofdxAibJH7bY8kq7++95WxkbhFPXjKhkP+1I/LtglcWpRF8IWZAQ3oPQvGjMNnu+xeVCibWCvgySgIlhfIv8AbLWItiU8LzisRKavw3iVNc/qenhdgX7cZn/Cb3i37Z09WMaQH3bzG6b4kO90m+bl+EpdPTQRimcL67Cn82p2jyG7nod4RVNs8z9d1tOc0G62oM7+Cb05+S/HA1UDthtG93y/OVkQ3WvYy6RC2m308ZTy23fnPqz8eShRdlmEDlyHNYQrKghZthpP9shQenzkHwZmiefbIhbhr9siYA3vCNc4F/TDfpgXQc0absZjg08b5o05cZzsWNkHLYvlzNCQecuhIqs52KvtyYl5Mz9CLZzg3rbe8F74RPbOjKU3vivG2PZ+mLJD7YALHbzjCNeMXuDJ3F84Fg83jDlRMOH98PeeuTBbfrgWuMq/EA5wOqf4y/Rde+2G198z/jF5Pxj4xlGixdslnGZ/xj1xXXPXzjKNXcYveBmR1yt3K5dQeuPW0bGYO+L+LWYZdQb24n8R75qc0dI1gfzZZp673hBQv0zlPUFW2/fLuj1pT1okd9yzxkvF/Vj6F9KZanS6ag0GdY28GYvpUA6LTSJG4jQ5vrbfPk9/temX4qk+pgpvcr5yxivGCMG79OVzDUsLRW5/thaqt79ax+0G3fIgjYfbC6zyiDZv85VO7tRHxmmYcUUZnlFtoDMtQljsB6fmLr9MDcdyk9tjGKHdKN31vFlMb4Pgw3CKrcmjmrrGCEi2TT4R3xKGWwK+r/y8slIv80otcB4++FBsEBInltxJQitSZNFloX+uN3WUtF3a/wBPTF7YMkjO3/8AJVMEU6gRPyxYjuWUPvjGo9p3KIbgY5p9wxC73Tb97yt09QnZp2F7Fn75VRl3wNSE/wAtv5QsfjEJXtORRxCO1e9n98sRiFwtN9yk/tlOrOESjv3baxIfqakoqsRoaQdn/fA6MrlquokZBQ1yeb8GVS1phWmxiXzIPvxisjUjEJBP/wCxdftmpKfiz8bVbBIVva2PvR4xZMO6LPUYyQGi7/2yghq6dOpMC1q7Er/m2aBJLqSYzAUaEicV6uXA1M1j3MRaa3Hb1/3y2OnPR06ixUbdniqefjEbhAI6SQighK34byuUBJxVCmhb28HxmRY6sIxhZJjYDdt3xv6e+XDFHTihujeweq/OU6fTke8ncpR3aL7muf8AnpjEO87pylTtQ1RlQ8tOMTuoRSw4fX2aypnGMEF3LaAiezfnLJQhpQqepJkit77cbGIaepE/JEBNrvnz7rkC3HuJSWtge3JKKyuEe55pmWH9TGkammOmf+oeQBT2p84ItqESEdrU3k+OOcLKXTRlXcxDd7Rr9uT5y6BELisq5or715ysIxaCUnlFN33x01JHbLTnDeyQiG/zilP+LpDTJim1n+PGWRjGUfyLK/JQ5VCIFzRRaQd/k3ySmxEjCTvy7V8ZME/DhF3nLm6d0xyUERRK4dn/AJ98SGrT+Y7fZ3+9+MvZCFJIrYvfFT6rY6dFS7a8Xa5ZAGqtPU8/bBGEJlxhG732pMsjGlqGQpvwxLa++BhHiga3KQwxHckAHq3jxlCTVkvHCY1FPHAnvd4bOGJ9yv3yycA32jtTTvijRQm3p5/bKyAPi/hMKH/cJ9tsMZb0oPteWxBKZG/zjcSxm1IibJ9sxakGGooUZ0p6d7WJ7jmTW00luXealIza2oQ0lTx5M8Z9a1HU1pSihH2857Hqwjoq+DznjvqOpp/jSEK/rnt/40+64eSuTbd+cK23jajFlcSj0xNr53z6MedDjD/y8mSysoJeN4vFPjJb4yBvLkP/ABkyZAH1we+M4E2wIO+WwllV14wkqxYNenPL4T25zBGae2WQ1ON3Od5G/vfXJmX8R/45Mz6qs/EPXJ+KHkznus3y/rg/GfXOnojousevOI6xW7mB1n1xXUXzicDc6564Pxz1zD3vrk731zXoa3fxG3OB6jfnMPc4O5x6QbXXfXF/iG+cydzeS3LOYa1fjrw4HXa2czW5Lx6w1odd9cV123e8ptwYnMNWuqrzgZuIC8F5bDp9WfEX5y/IK2S8uDuc2af03Xm8VmnT+i6kqZDmb3zD65unCWpLtiWuep+ifSJSlGU41XBWxl30j6EEhYvznsuh6GOjACPj0zzeXy/MiyfT9FpdmhGL4KzR2t7YSINFYyHl/TPndfbrvzfhGNmMFArfsYaDZ2DCl20DnNdVyirb5xe2vly3t3d8Ej4+cLKolGrV3yjVLtP2zTOO12GZ9SW1B98y6c1lmpzZ8c4lxQNvvvj6iGyC5mkyapA9OMsdYupq7o//ABOchsf5Wsq7Ju92Vt5/bD2sd5S5OZcn2xgt7gKEfF3VY3c1/O73sOVEu6RGMSVeUoMYCLQ28KFYsE7g2R3eat/fxgm7dpKRfpHf49ss7EaNn33Q/tlWpIChL9dj9MSaap1ZMIDVHO7uvxeZu8kd2pFiGwNgvpls5aY90gRLt3ftmLqepjFIxvf123zfMIv/ABIBbEb8b48NWUtOqjHbYCr9/jOW9TOXEVKsRqzLdPWWmJAR4kUH+c36U1u1dOPYH4UpW7t2ezh09DX0388khYUA7e44sNVNI7bZXdqg+rmjT/FloCygN2291Pn/ABeZ+mkbJEO2UY91xkNL7fHnGmR0YLKJGLLb828iuT23yo6mBPslp2R2O1GMSt1t9fF5drTigyA07KSx3p2/UzOGl6mciLLSmhGKAi0Vyf0vB0s9SUIyZEG67WgQ5T/GVylGOpJ0gjUewlewbbnv4yyMJ6mjUtSG6KxBQ5dv2y5MDI68u2dEoNCCirs701+15ZKOsETTlEIu/aq0+XKIPdq0ncosVUb9NvBWWjK//TCClu1kvFjkoiMAVgpQzls18+uVS09PUgArRdtlfA1l/wCGwKO0He7q/wBW3I6eoy2Igbfmb/a7/UyGqZOlOJpy05xAEnYD84fzad1KPdI2Lskf2fisuSMIpqRICtgWL6ocYvZGY9pEKq4nB6b/ANsopNdFNWLGuGQo/wDPbLTUmAxYo7DSX8eMqlGjtPzRugEq8eLCILKIU12v9/nJkF0VmAwRN7OMH5e66kV5CzFJxu5HbJ4pq/hMaGpJUuRTXNmFXRJeEK8iP7Y3e8SJLXJFMrqiwiI81eWx1K2kx38Fn3zKUe58CLxd74WcgNynnhvEdSK2ST5MIaiX2xlvyYSnJxd1F8m5jEoH/anxaZTJT+aMitrC8eCNfmX5KcJYtOznx84Qg7X8GJEBbv8AXbHETan9sJYbtDbuUPDlepElEoX5yzZLqvZ5yAIU/fLKxXnv9Ra38P0MkQeN88DqakpSkybX1z33+sKOhRIrzu7589k3JQq3j0z63/Ek9debyX6F7NYb3wYQ3sz1uY3kHfBWNWKJkyBk7XJoIvph5PGQjjEWuMloG4c5Kp52ywh5rG/DXxk2ChF98FN5oNHbCaF+2PaDOKbYRfvmg6dfHOPHpm9hyXqDPbkzX/DvpkzPtByryXkrCRXO4XDj/huKxTEoXJhwYByZDdxowX1xoSnDTmmOivjC6DXH7Zn2hjJky6emnjKqrbNS6JW+a+l6OWtI2ynQ02eoHq56r6X0oEXtM5eTv1iybVPRfRiVLH9s7XTfRIES4n6Z0uj6cA2zr6GgUbZ4OvLdanMcbR+jwjzE29ss/wCmx7gI7Gd78EI8YpondxnOd2lnxm6LoowCis6BAibY2lEDbJqNDWLdSMiVLnCBdu+GX82Tas59RuUN3zh7Wt7axgvfx74QXlzGN6VKGg++Votpvlqe+LJPLbmVimdVul/OZtXdqs0TpWrfdynUQut/VzLpKyzgJup7ZROIN0Pzmqe7auUSjatAe+HSVnlOQ0gxPBsYDUlZRE3tLMt1IFUgb8uZmPfKlCI70VmpF+L4StUGgtfGW/iMYjFInqc/7ZTEInbFFrgdj9cXV1YxlUXukcrv/wCMuaampqSkt6lRG0vY/wAuVT1CQgy3238/bElqJK0vbaO23vlE5SdxseVc1OTQ6mcYiLuct3WczVGUkU9m/wDl5vloyne13soYj0zXAHhzpz8NYO2QXJUSkGtvTLumQAjEs9fGWdTCUQqN3td4ujELJDfi2jN27EdPQ1EgSlOJsbRN39sOr1CgIR8eTYfvXu85z59wiFVwjiT1NS7ODzX/ADfOfrqyurpa3cOoSIxWiUYjW+7b/TKteU5xiSbvckUIW7/8MxPV6n4kSaBwRAo+1bfHnLTqajc5d1A77Cenrvj1umrDW04ylFktRAsp2Nmk388euWdPqQ1NMnBX8wPcejv9+NnMEJEtUIylK2lC9v0/8Zt0JrrRkbe0jd25fvi85DWoZQlLV0ZCqiXdU7/Cn6ZdLUSI0yEtbpPPxeVk4/hoSlVoKm5XrWTS0JarS90RK7VUPNmc7i6aMoTp05Kxa7RrZ3y/SiTjJnGcJF3ECP3HbE09PunMCpK1Kgt/t6YdXuj2k0iK83fjj9PbMppoxjF3nZ4kbtPCuVy00nbHuS6lGVPxWWzjFhcJRr0S/wBP8YlyGpEZFpvzX9fs3glUhKKctpXdsjllSmNlryDT8p5+crmRJVFkFb2iG2NGTDaQgeTf/wA4VJaSRSQSihSNV98kAiHbqKcVJ2HLYTJbRUvyGzhCTGlQrcb/AK+mDUGywL9Ta/hwkSKpsLwGVzgQkSF7U3Brb122xidflEbLBOcmAjE4W/jf9MYmCdspHp5HKXXjYSil80/53MYlGmpCPqUYwXs5Nikq9GsXe7pMQXbtv9b/AEy2KO6VftzkKs05EimVfJl8YNbL9nKYwE4v5y3TE4s8c3hztMRa3N/U2xgA8mSLXJvidRMhp9yh6K5ZNYteT/1rq6cIEYv503asT0zxNK2lueg/1J1Jr6/bDV7y9wKLzikL8c59jwT14eXq7VRF9MYjlxDHNLjbOt6ZUEH0xjTXNEdP1yw0x8ZL2Mpp7Yxpe2azR9ssNGnjM+64xGl4rHNG3jN0dEvYxzR22PjM3sYo6K+2WR0L2rNkdE4csjonOZva4xR0LrbLI6FvH3zaaR6ZZHSLqsz7mMUenHwZbHpr8ZshpcbZbHTKNsl6XGH+GPQyZ0fwz3yZn2MeEhp275q09EC6yvRAfXNkD8vGezrqsKJaYDRlOpCrzbKN/OUzhtmZ0MEimsHnLNWO/G+V53l+GDE3zToxFzNFpzVoS33zPQ3aWkO9Y7o7cftj9NxVN5qjpSlW22ee3K1+uXqdNfBmWfSSuwrPSR6RlVi5ZH6ePjH+mGOF0PSP4wpnrfpuikQrKen+nEUe3jO10fT9tbZw8nk9lkbuk0wDOloxAzJ08KDNmnsZ5q0tUDjK7LwzllZLfEjNXCBizlexiMnjGgK75pNIwstHFiHpl+ofl5rKQb2fOY6bhgLwtLeSnDsG2YWfSSo98rmKO1Hp5y2rxZoWvnMNxnlFdt/7ZTOFNqh75fJ/+t/fM+qqu1v65mtxVqMQs3+fGZtTUDfut+Ms1RXM2pFPQ/rljrIp1dctskVxfGZZaygxtri3z61lmpFlJLecqloyJFFeqOdJmNfEhOVo3vyrd48QWkXzj6WiO26nrl8iMS5NJ5zUZtZ/wb4ir5V3xjQAN69uawy6vRjsSi+61mfV66UmtGMpVyiB+rm5zaza1kIxjXmvtlcpR7u1kFtUPPtnL6jrNcC9Q0h/7mVn6bZk/jF6rTi9RHUO43A9c3PHWb1I36k4y1WlDdT39P2x4MZaIoWu4eG/Gcw6glchWSb+NzbN2nqE4RIJ4H45XNXnITrVxpso8NO3zmeWkxil0XymadPWPzRWg4cGrUojSD5zn9ldJXPIaaqq0LtsmRGKCvrd7mXGm3NUq7N6rFqNLKSVsvD/ALZrRIBDS7oD3NCu297Uf5zXozINgxlfJutm7lcSK2fliJuI7nhwM0CVVcm4+n+2Yv0dXSgMuwlVWxkNJ9vfGlMhLVYCq1RzZ5P65g0uokSWQClCKnG2T8dY2tytRN6LszF5o6ehKOrJJjIW3uCx9vvl2qSEEEdhC3Obp9Xph3AEuGy969Maeuz07ihIq+1X4a5OecxebpjYz7ZfiaUu0f540JfrTiTlDXikppI3ukRzJPVZSJTI2FMhpPk8jk/H/LRFY3Zxt7n+MetUzDUhJkKt7K7ON3oUyY2GzuZVDWjJqQzjwLX/AAy0e4oioe25lw1bpzQuqvZQ2yyEhDuF9ERPtvmWIxVjLt9kR/bLNLVbSTTd2GZsXVqw3vuK9K2yfkQY017ce9Y1SETtkPtTk7YoyiMfZ8ORNBBF2l7Jf2yQIyj+QCuSnfDcogiPqJiE4rZcJHIrWFPuNiFemWwVPTzT/XKpSldgp5r+jlkJb0/vvmStEJJum3rWaIVIaPjKIiVQ7+madIo4rDl0INbj984v+oeqjodIjILKsLrO5JqK8hnjv9TupPUPw1AaS+c9Hi53qOPV+PLa53a0kSVt2ZDTvestjpt7m/nLY6bWxn0tz44M5DfjLIw9svNL2x46XobZm9CmOn6ZZDT9svNOvGzjx065MzaquOnTtjxh6mXEPQxiG/GZtMVRh6Y5D2rLowfS8Y02slpFJDfjLIw42y6Ok+l48dJ9HJaqmMK8Y8Y1l0dJ9MsNJzOqoI45Fy00Vcc0XyZNFO/pkzR+G+n7ZMaPn+mI8Zs0uN8EdF9Mv09FHjPX11KxIVg5VOClBm+GjZub+uN/D34MxOsXHF1NBXa/jKzppPjO5/B27mWQ6L2/bN/6YmOFHo5emaun6NE23zsw6I9M06fRg8Zi+WrjD0vTImznW0Oks4y3Q6Yj4M6Ghpm1hnHru1qRn0ukPTNOn0h6ZqhAPBl8IhnK9VZFGn0weM06eiROMsKrLIb8ZnbTRgdpjkq2LwRjbl8YAG2TGbVXayeHLI6Kb1lhQbY5IMsqK/witzGIVxlgmCzBFUyjM/EuHNcwRzPIqW2ZrUQduMjsWmQqqMjdc5huAya2Mpnat1R+2WImJOgrMWtRVLcQs9XKNRIicfGW6kniO3q5V+GrbVfOYdIzzuR+U+7sZX/Dtsphm00rdz7434fm6ytezny0BGj9sqj0pbY/OdOUE9fnFjDf++alPZy9bRdKHdF3PGcL6l9Q1IjAKfU3z12vpDBE55zx31/Q/BnKz8tbJ4z0eKS36lvxxdX6lqafcxiytok8L8Zm1PqfWzK/EQ9iqydVGpQPAWGU9vc/zET35c+nzzzjy9dWknra2pvOcpfLlcZSjIYqI2VnT0+u6bQ0tCMeg0pzgy75TVJiUCeK5KzDqxjI7ona+Q4c3P8AxjbW2Ot3a6DRM7z3suv1s+2dDpteUJVdWVfoZwYzkkC/5Vqjc3v+v9XO304T6YmlKZw8vMdvHbV2vrNgSoa3urzXpaqbaiRugB++cnUkkbkjXBebvp/Vw1WMSUbviZX7+c4dc/NeiVuYLE7ZRB3s3szNKErO7cfPt8Zp1IxhLuiQSTREVB9jKdaUAIPd3bCG1fGcVidzBIvbY1V8vxklKUZ3KndF3/fJpD+NuCbBbz5ty1gSSxiCu2S/F0lrFs3N3/bGJSTZD5N8XUgELWoHvfxmrQiSNwbOOH9MX8VTGDSlDyjtuZo049tI0hsuWdiACffK5SYlR55rk+cxlpozYyX8tCXV1lUYxi2XH29cr1dbsjckjXq5ml9Q0xBl3XxRmpxaz7SNxMg77X5C8f8AiQq5WcJ4cwPV6cykfXfbKpa0V/JOzkury/509o67JQ1IKxTcW6cs6fXjO4agj4L2fhzmaHUdpZLnky2U4xltJB8nGYvFhK6EpsZVCVn/AHRls/b3xo6jzFVDcd6Mw6fUsgjqI1w+T7+mWwlIlYB5E2v4zF5xuNveMRQs3E8YZx7qkVb5NtsphqEikpfPhf7ZbFYlBtyDvvmA2mJyJXo5ogCbuVacrPX29sthIHa/j0yWM2tGlYlfb0zXBPJ98yaaWbIeuaoyAsfkxHPo8yxq84X1T6UaxLUC3fO9fpx64GBIpBztx161x6jwOp9PlCapQPkxTp29jPZ9Z0MZwUAzkPRgpVZ6Z5NjlZXGOnUqv2x49M+mdc6QHissOmPTNe0PrjnTvplkemfTOsdMemNHpvbM+5jlx6Z9MePTPNZ1Tp/UxzpwrbJ7Ljlx6fbjLI9PtxWdM6f2xjQDkyeyudHp/bLDp/NZvNEvjHNI9MmjBHp+dqxzp62zcaYY34Z5ybRhNCvGNHQAqs2EDzjED0MmjH+CemTNnYehkxqbHz2OiBxlsdM2PXBGR4ywke2em6Hhpg7mXRgOUkw81jmqeuTKq4gFbY8Yg8GUGsHpjGuXsmTKnxqjE8+MugBmI6iJy/bGOqiBvksqujFCt8uhMHnOUdYHnJ/GxDeQOZ9bU1246wc5YdQHnOFHr4saG0zT0cpdTqEY3zkvGfpruaE2bZxm2EaDbKek6fsgX6ZrADOXVkJLQCucddsV+MI7Zj3rWJaYe5KwcmKuPZfWLe/bB377ZTfrhHLOkvK4kPOJqI8OVskcDLf3y2pmGLrbJR5vASVtT4ydx459sw3AnsbIZSibl2+ctd93FC3mjOdair8O+X7YxpkeQy+g4C/bIRibpbjF2qCK8H64xB5Q+DLykoNsibenxjFZZichlW5Jva/OadSCFjlMoSvm78ZVinVFi0eM879e6aWtpkmNjcZIcGekmJYlJx75j6qHdFJR7oS2Q2T3zrx161qzY+dddofh9PFR7tJ7JD5PCe2YUE2856r6t9PuSIhuEkaT0c83r9F1GhJYwZQN7Nwz6fj7nUebrmxm7kd+fVxWXdsYySWuyQviss6fpNbqJBCCF7rwGdtkmsSB00e6TEGSlAeudiR/D9A972qWA7mXdLp9P0MKjAZhvJ3XOV9V6k19ajw+POcLffp25nrNP07LXlHSa3Lk8Feq51em+n6UJnZpx1JVsy1Ep+39c5HSSnHSQQttQtfbNfS9TqfiEXUYjvsePdrMdy/kdJdjpazqaYxNLTK2uNp+r/XEZyLJPa0oET+mLqdWBUyXc8DsJlMOoRZLGSo0bq+ucJzW/wDxq09SEo2SjZQ0U/FZthqDRK6ShdvtmDT/AA5yEAkHIU+v7509CDONMhumlv7ZjqSLKq6vpyWhL8OIS5BaqvfOd0/XMFhqVFBt+POdbq9CctNoDZBWq2c8pqk9PVScottWN2Zvx8zqM21236iEbWVXQeX7emU9R9TiRqCm1Nm65yxYlrS7F85t6ToXU0HXkW3sPznT05jne653Vdd3KMZMvCu36Zk/jNXgoPSs0fUtNh1D+Xkt2zI9qcffPXxzzn443q6uj9Q1h5H198Y6mUmzZN8xoDRmjpoMpFF4655k056trb0+tryaJUe2dTpzUlAJLK9qfGU9H0jQ0+q1nU0dBQUaP2M8Xk6mvTPxTp6UloKre81wWJEXz9ry6GgO6uxwG2CSVUS65c83V1uXFkdgWyucvi7Vd+jmfRiykCt+PfNenpog/wDjOdi2ngMqsp9MsNN2T/xlmlp07+fbNUdM8mZZvSvShIdnZ8ZoNO3bH04e1Zohp+2HLrpVHTQxowTdzTHTrx+uGWmVxmpGLWWUSUacx6vThKw2zpSgBlepEc6S5Wa534B6YxonpmrtLowMds3qM5pHphNM9Mv7d8Pbtk0UEA8YSBlrHbJWNUhE9MbsMaJhr1xahCJ6YQPGNWCt8AVkrGDfGofnBiut98YP0yV6Yarm8AVkxsmNHy3+IDzh/igu/wBs5H48nzg/Gltn0v8ANjXY/ig84P4wPP75yHWk+XF/Ek4/zhrsPW15wPXeRzkd8na3B3PCuX/OGus9fXL++D+Oeb2zlWvOEXxbj0hrpPXyOFwR62UmrRcx6cZylXbfnczvfRPo2r1mrGTppG+azHXrzDFf02Gv1PURIijzn0H6T9PjoaMVj+auXB9M+iaHSAxiX8cZ2IQIlBtni8nk38WTCkaDDVmOR9sJHOGN6TtydtcZZ24O3JhqvtvAx2yxHBWSxZVUhytad80SCspkBjMalVSlTikt75yTUyplTealMX2u7tjC+Mzw1B2XfL4oFrzlsZ/BbulQxoxb2L93FG0ywSPOxmMalSuWvvkQC0H74rMdhowNO6u2ZaOJ4/bCIcXlbKmhWvTD3bVu+uA+yb75TqRs/LWM7+H9MDbuIeOMEqicWQWD+yZRqaKlIt5rlFf+039TIwK2K/oYjc6cbqOl052Tip7NJnL1fpxDudNQqgX++en1dGMiv6Zz+p0mIkVT0oztz3Y1k6eb1Pp9iPaeqRrKfwSEJRgKhxm/qzUlKUYRkvlr/lZk/hJy6mOnDXCUvy32m75N3b5ztOrZ9qeklcjro9RKRpx0pjJA2f1xNH6F1M2TrMYP/aK2vrXP/nPZaX0LUjAlq9Rqdw32xoD773mg6HRIdsiQpvIW37+M1/v6zInrLXnOl6HX0dD8LT0SEhtkg0+rviv0ietqXTGm3taFdrc9VHpIhYbx2L3yw0IdrQRvl4c43zXXSSR5Sf0VghMZVtdcZdpfSoAlUmwvjPRS043vTtXzifgRZiJsi++Zvl6WSOLD6cwB2sKLL2zfpaBApKknBy50XT7wqNoftiT0WirDlo3zN7tLI5vWzqNRiqnyPyZ5bqtGTNYdKre/a3f2z2mvoS1IyhKVkim9ms43U9JPRl+TaPDJM7ePrGOo85qdHP8A9wUkG0ZZ2vpvUQOijCdEqpPRzndUyh1HbN7jmKFWe5iy6Wc3u0JSi+h/fPVuz64dc/8ATN9ZkPWvG5tnMk1xnT1eh6rXlepSm18Zq6b6JGTEki8pznWeTniOfra4uhoT1pgDXrWd/wCn/TE0yypO6eazq9J9JjpF1EfFZ0NPpowKiF+Xlzz+Xz+3yOvHGfay6PTdoRiFp54M2Q0CMaHY5fV/xmnR0R5oo3XLJQjJqIvvVZ471bXTcYpxewIqrwRK/V9Mth06xBiFbUcZs0+nXZCzewzUaG1BzmbU9nPh0gEUKpvfNEdACw35zdDp2qrL4dObCbmZy1n2ZNLRKF+2adPRHZMuhokXi8ujphwYkrN6VQ0TwGXxgBjka4xgzUmMXohDIxa2yyslHpmsZ1nlCvBlEhFvN0olVmXXiRducLLrLIpwY2ob4g5YpqPGGit8FuMG2AEMDHfG84awhKr0w1jIed8le2XQib4Kyzt2xQ3wFp849bYa2yG+2QLtdYUPGHtrDXtgJWTH2yZR8O7VfTG7F4M2nTLwX9sc6R9M+r7xy1zyCXvjGm+RrOnDol5N8sOhTxk94a5JpO22MaCuxnYj0V7BvlkeiK4zN8kWbXFOnk+Mv0embPy3W++dnT6G3jOj0P0mWtMCN/PGc+vL8akrP9J+kx6xGWmRStzhz3X0zoNPptCMYxBDxlf0v6ZHpoFlIbZ1iNBRnk77vVWQpGjHImHJ52zlao1kr0wW3hsvJpgPpkTIpeTJKFrBW2N5wOVVcjfKZRzQm+VTMYSseq1fxmeTY75q6iIlmzmKdhu4k+tz8LNY7rtl+nqCAOYdXVaS8XQ1knTw+XN5sLHYhKt/OFVavnKNKYl5aKtZmxk2wIPGClbvjAvaU04upqBGiw9MxY3DdyND8434rwc+2Y/xLW7a8Y8dRtGVHpWZaxqJqcP3yd8S6atyqKJd/c3vLCRE2jd+uEGza4r6u7kWI0DftgZSTYX77ZXqSI7yafQ85cBmq122P65m6gSKMS/YtxpdRHSFG5VwuxlUZxmspoyfR2rNSY1N1nh0cJz7pxk03VV+3GbtHptGH8sAU3GJR+2COohGMbA8Lf6XlpNj/MMR4av9sW1q7/Ty03t2Qv0Nsy6kZQe6mR5rx75oJJKk7q8nj5yueoElpCt04xJrOqu87GQ8mVzl3UBY8uVT1dPRhLU1dWMIDXctFf5zK/W+hh+XTlKSf93ahl9K3LGxi+Te8V0+2T223z74uh9Q6TqA7dQJJ5KzSdtXY375m82NaGkoXQpz7e2XFSKq7q7xIwBs44AcsCnelfGTEtVMJErXYeMq1YEn8umPvW5l2oLsFp+2CENRfzQX4ecS2G64H1H6V+IOowuQ7Vd/pnE6fbXlpolLtdJ9s91qdPFjIj3RZHrb+meX+qdI9LrEkHTWqun59s9PHdzKxQ09GMm5QJG1Ibnzm/T6fSiEqF8KFmZOmgJcZSBOOc6GhosuZylW25k6q5Dw07Ljt8ZZpadyoFPXL9LRaBKPndzR2x04VYXwBnG21LZFRp0UBub+3+XL9DQFsto842jBlK909ODN0IAUHy4yud6U6eiexmiOmHjGjpg7HOWRhttiRi0sYAeMYjtsGORK4cIUcZcTQI1jRLOMmMYS1ArYycYcHGGRvDi4a22coDs8VmbqAd/fNMjbnM2s7U5asZtQKxAsxptmJHcw1Erf1yw4vEpvD3UbYoPnH2yq13cYVaMIZMNWYvcHNYe8WsaYIP2wMa3xu4DBd740SMbMidvGHuaoyEV3caBYGC1dsCJKjGqjjAWn0yY1+2TGj57Dot67ctOio/lzsR6cHjG/BPTPTe2Zy5B0gPGN/DV4zqfghtWQ0jzmL3Wpy50em34yyPSngrN8dEOTLI6dcGYvdbnMjN03TBMEEXPRdB0enpRGJzmToOmZ6lo0Z24QIxAr7Zm1nqzRiUVWMoZK2xXnjM26g92C98NZO3M2L8S9vGS7MjHbbJWZEHJ6uGslZYBgvbGSjFdnNYgeMrnvlnjElxthWTXqqc53Uypq6zo6276OcvrtxQ3Msb5ZZyG98yOt2Tt8Prjd7bbmbXlvd515i11dH6hChUK982aX1DSlG7B4zyzNrnF/iGDspTe2X0lYvx7KOrGYI85JBVucT6d9RilTl7b51TWjMKRvxnHrmxqVJdq039sUQa7qPK4JqHIZUnd4v5znjpG7T1NIjV93pWxgl1EQqIq+DfMgUUVXkyzTBeE9XLiZGnuZNeoearK+onCArLg48YsppFBIjtfmsXT0++VzLPG14WRkhpamvqd4x/Du1eX7Zp7RKDc8hmyOmSO2IHtjfw6Rotv14x9anUjL0+h3yFUp5850PwztoFK4fX5w6MACKjW22WsDYtyyMddfWKUJRjYJ6l0p/fOP9U6nU0YrB7jfzSOd7WjIGh45Nz75536ySIPdsLWzxnXifSX485KWt1aT19Rl2qxOA38Y8dPuk7mxdfbJqRvaO1DuvDnN0fqpp9X+DqRveu44vPTOdnxi2x1p6KQWIib2NZNOfVxO38aScbvHxhNa4Bz6DlhqxI8nGc8b2pp/Ueu6WR26v4kDdJ7qfOd7ovqen1sL0osZjTFaR988zq60ZS7YvLvjaE9Xp+qhLRkx7kinhMdcSxNr3ehBiC7yfQoxpRB/MJ7heUfT2UtElKXde/d65rQ4C/vWeWz6srNMIoxVfSs531Do9LqdCWnqRqyytkc62owqkBPVpzm9VzcNz2SnJNlal15np4anTasjUYsYtDz8fGdfR63TDZilb1sH2zJ9Tkx0rIpLkQH9c5ujqasi9SmvFUZ3z2mruPSw63TQdMH1Vy3ppz1da3i+EzhdFGWtPeqvw56LotPta39kzF5xz66jp6UKDgv2y+MV8Vi6YRgF3ll5lytQih4xqTfb0wDtzk7q+MJpxycYLE2Mlrx4wJbjFvOJYO+Elt63gsP9sF275L3vj3wWedsrKLvjDtlbIHbJGW+Fs+LGqu1zJ1D685qlIDjMHUzL5y0iqbtRkiUXiErcsBTfI0JucYqA2/plikQDBQt4CxjfjGkETJuFRMBFm/mwAR7t28gb0b5bQFGEgDbxgLHSVv09ciVxjymO0UrJEDdcqAFhtWCQ3RjTV2BMDFC3gwDGG35sW6fX0wM7Uu8eJFi7YC9r6ftkyd7kwa4/YemDs9sv7b4MPZtm1Zvw78Yxpl8ZeQ9sbs2yYazmmHjHhp2gG7lnbWXaEL1DGFvxt6PSIaYHKc5rADbK9IqOWxyVjUC8le2Nk8e+TE0vb98IY1ZA2vJYulY1grLPnFeMmGlyV6YayXtjF0KxJY7x75XJtwFfnK5yrbLHbKZ74airVBFPTOf1MIygj6Zv1VI7Zz9WTJp5yxqON1EWCsdzMGtNR34zpdcSgKcZx9ad3nbmNW/CykeMqnK8VlvblU50t52kYadLWIPOdn6d1emn5pJJ4Fzy7qU1eXaXUMEbt8b4642JuV7YmTLEcjabbZw/p/1E/KSbvkzsQ1iZY7Z5O+LzXSXVo7GN+IxPX2MWP634MbsCl8+DnMSNbEgd8rl+7m/RjGIIMnwGYRBs2D03zR0+qyaVLxYa0wAlapbwZoiRTy++URYmwW+UMtFNwf1xIzabtp2A9dsbuA3OMEZCbX+u+QI3sX8ZcZ0mrKKbDt6Ged+v6I9JqpAaLV5Pv4z0WtIqgfjOR9VF6bUUIgNK+a5zfN+r/Hg+qnq6eianTSJlfnjNbi+z5H0dzOIw1tXWNbUouQ7NXv4zpa7qaevqaa0u5vs5VpI80I2b3n0efk+OW3XQNaiMVN0LH75n+qdZLS6eoNSlsPkPLmcZPUR7V/KL/b/OHq4R1iJJXasxOZ7NXq40fR9ENI1Jvcu4rd52el0nW6iBEVJDsXnnul0tXQIxjrsST/KUn757P/T3RunD8ScjUnJ5Xfb+nxnPy/PrfHUsel6SFacYvaIG1OaeyINp9zK9B/KXv85axatc8dp+MvUTlESJZW22cTqJaiyWgOT0zt64RjZ58VnL6uBJtDfw5mfrpzY4+samobw7o+o7Zj1yOnpLQPgzrGmRe6NlG48Ocj6sRkMKlpyd9tx+M78fTu5Gz6ObRkSd3fPU9JEApvPF/QuqIzIiSjHYpFT39M9j0evGUR7UHjffHfN1w3Y6MJAU741l7XWVxpBH4MPcC218ZyDkh2BPfGYjHdcrJb70jxWTvSW4VkFsUCrvIyQvxmPW6uGn3XIim7fpkh1RqaJOJd8HN5TGqc6LvDpy7gXMf4kou9G+/m/fJ/ExiXNDfjhyf0x0Lo3fvisrU49MwaX1CGrrulFFBXNCshTagylmHlKhu8kJHcC5TLWCLaX5M58euTqGA0Fu/pjKZrtasgjd/rnN6qQyAecGr1sfw7lvfAeuY4zdWZOnbgMpzMbIRptLywmpQVghGUwFqvGXEU2AzJVddpaWuODJANvXAEmVSGjLhIBW+UKRIl39snazdhMKE5dxZWEWvy8hxgDtIH5ucrlNUDf1XHDuPzu/oYJQ7AQswDGIRZch4xDU7940VjEZG4hF53x4Qit0Hy5YK+5Inc34xiZQO44JSjJYqFPN5ISiV2l+6YDfkHYDEkkih3vkxu4k/lATb2yUrTAfcwhdvT98mN//AKP/AOjJjRgIh4xg9slVhN3NIXtvDXpjfbCG+AtVl3TB3XXGVp4y3pi5OEv43QWscyuKGWDkqGBwjvgHbDtkoNZMl7YbwI74Gr98liYGvOSwDBxjfGKvOMWFVMSS3jLiNXzkaVzk1s5VatuWyDfKdRQscLFevKou9ZytWb3NO+bOp1Qii5zdWVi3mpG5MZ+vkGiql557V1C287H1LViaCrnmtXWpac9Hj5+Fq2UymszaupV1i97JovJ+DqTdhzvJJ+sVRLWV2vLNOcpJV5s6P6ZLUkdxnX0fo0Il0YvfMZsrj9PLVJCX9jPRfTOoYxHXlQ8Hl+2Np/TtKOzEX0eMh0kTV7ojJNrzj31Omprqx1LLjte4f3cv0osi1V81nM09eGlLtnIlJ5Dg++bdPqNik+DPNeW5Wp0wju1fpiDGLZ49MSep3SBXjfFUOdj18uZWOhpa5KNBv6ZpgiUhbznFhr/hqw58rmvS6kq1Xa3fLiWN7UXla8HGT8UY1sZlj1MWO6FbquJLqCW8Sg/7lrLiZWnUnVCm/rznI+p60YwkqN7Bfpl3Ua0dLTWTa8F0ucnqdTsgykDqSuvPaZvmfV/HnvqXRS1JOsDDlVf1H1/552zizhq6crRB5az03UR1NeUhvjZfB7H617uV6vQw1dNhVCRgXwH/AA/fPXx3kyudjzulrMWSBah9gxjU75jLauA5vOn0v0n8OYzh3KKD6rsfoZ1tP6dod2osAIpSni7v58ffNddxJK530XoZdT1UdXXEgfy3657TQ03T7SISicJsmYOj0o6RKIflvgPHD9x3++dPRuwhKpBuPn3M8fk6vVdeZkbtGJILuuRzQSUS8o00f5qHizGnICx3OFc4rfqvVVGwa97zLq6cUqVl+Esc0sm72b5szNralCu1e+2MWXGHqjS0YPekduQc8z1/UjKXY9PqRHeM9XtX4uqc6f1b6kwuMCUk5BFPgc89qQ1us3jGO/iel/cc9Pi5ybWOutNUtOZ1fT9HOUrqf4WqKPhQsR9fU3z0P0n61pahGM4z05myTNz9azg9H9NYynehElRvoqKiVs3Xnx65p/6d1knu6bV6npu3/wCM/NH7Xv8Abx4zp163+ucte86PXjLRslfpfOGevFnXcGeO6Preu6d/C19OGs1tKFxl9zb+mDX+p9XLqA7dXRhEpZRQfXfx+mcLx9aj28dQdxv4cq1tYjFHz65y+l6vTj0sZfikiqtec4n1H651rKUei0pzjf5pEbo9DJONo16/UGt9SnGcpdpEAvaxzsdBJhoBLUu9y/Bnl/p/1cdX8DU6WUdVFAg3Kt+PXO30nV/jTjGGhqxjQrKKV+u+XrjGvb5jtTnGze7/AMZj+oQJaHcNJxeZtfW6h1Ix0NGch4Q2/wBsr63ovrPUdOw0IaYy5uXA/wB8xOZqbYPQ6mlp6/4jMFoI3fzmvU+r6UFJTD3HxnH6X/S3UaMbn1M5T5QaB++dDpf9MdPOC9Tq6spS5BAD04zWcwttrndT/qLTl1E4dMS1K5kCl349cfTnq9RI1CLBre9lz0PR/Sej6HT7NLSi1wvLmk0YR1O50o7lbg5L1P4kuOJ03TavUxd0PVM6fR9A9MFyZeqm+bOzSGyJF80UYxLuNkL4zNptL2EXuKvijD2b3XPvgvtd2UvOxthjLuUEr3yIWT3iDx4rfJHTkv5msaUKVQ+TJ3Ab2/2xipJjGNi/bjEjcv8A7B64Y90ndovirMms/k8NPrlQSMfVAfO2VhKUklFafPD71kiM6RT0rH7ZRVnOonG25kVE/DLKr0MTuUsQ8g8YdlWKL4XbD2ind48jlwJHTkKyiy8qG2MyKEJIcHORO4Yh2154yEEbUl8ZAhGMroRW+PP3x5MYRpJR22cZlYdoEvWsrlGQ3Ifu5UJWn7f/AM5Mf83q5MDLV4wVhI2WZK9c0ghgSnJwXgN+cCVeW9O1KvXEqzBGfZqW8cYh/G6wy2MtqMz3YN7Y8ZB5yVP1ovDbVuVRkeuFbNnIYcd+MN1zlXciWYxIckpYe/QwK+cC0ViMnw8YMPeBcq7kWsWWpRY4WQ0p004ql3lUpijt74e8C0yNJqSo5rM2pqANvGDX1xaHOf1WuRgq8FuWTVheq1RVXOV1PVkBpzP1X1FnJjo23ttmT8DqtaVdrTnbnnJtVm63X1da4xtPbM2n0epMtGvjPSdJ9D1EGUVec6un9GjGN0X6Zv8A0knxHkOn+mTWyK/bOr0/04AGP7Z6OHQxgURMs/gzZAMze7U1x9Hovw9w/bNMYDRWdI0yIRTd85Hpue039cxetHI1YkHd+xzmTVnqTUPyxNqP7udmfQrLYyf9OE7Qp8tYlV590/zbX9sMdTU0xd3wGd3/AKZEklK+uLq/SwjUeXz6GX2hK5710dKVTTvo2dw284DricVG/VWgzXrfSIyidoKAW5k1PoWpE7pzX0Dx9sn/AMtSl/i9MG5C+g7frhOrFskHocBlep9E1e1S/U9Mr/6RrRAZMtT9j7Yzk1pepY0jZ6+vxifxmpOVRlx59Mya/wBK+pxjYDGt998p0YdRoxucW/Ws1JD2bpzlbKSqNqu7/jM+rr2SkqRNiua9v+eck3VlpAQdjd9cyas9SUUNKdcCRXNTE2D/ABSdzJBd68AcBmbQ+oSezUnvbUh8I2f0f1wvSdRIs002tEpcTR+m9T1DKOnpSfChnSXnPrNbv47Sk9sQQVXybn9ts0aXU6corGQXFjI9Tw/uP65h/wCh9fpX36SRlsyNwPX9c09J/p/rtWQabGIO8pNBi3nEjo9J1Ud4ylFf5k9duTN+j1OnKJKMjZqvXOU/6T6sB0erCcG4tbG/F+mW9P8AQvqcJqgWeEq/j/nOcr61uV1zrIjvIL2R4x/4uIIpb4fOV9F/p9NI/idZlavaNIPi3+mbj6b0pJAmI/P39M5XF2Odq9ZBKjJJG4n9HMOudd1k46WiMCX/AHSKD4c9DHotCMizuLvc4+2X6pFO2BXq1iXE9o8/o/6a0yP/AK2oznVtbZs0Po+loQ7Y0DueUzq/hVEUQ92sMdSMSolvrV5fas6yaHQ6UQUCT6G7jvT6cZMmNRPjfNBIispNXwBz/jEa1JJshxtmdGc6bpyfd+HFF8g18Zo1IaU9PtdKMouzcbxnRBJKqbAhjSlqELgUnhxt0UP0/pJQA0NIA2CIfOWaeho6cCJpxIpsESsthFq9RFfLipAn3Evs4QmloaWjN/B0427qFOPOOnJuvzGyjz7YJXLcvbw+MaMdPtWQFeHGqCRiXEpTk3wxbjsDfr4xYzhO4xs9G8de0HZ98hUCQbyjxxV4k0i2APrwYtai349stDuC1+++ELcpUrVemN3xjsCy85XJO9iuxxWHsYlw8b04VAkrKQA+95KDeLT5Ap+2NaxEG8UO5BF+cBXuW4n74IxreRT+uXdrF2D74upEkbfoYNL3xNi3JEi70j74YwA3KclXYeMgjqbURjfrhIyk2o4DSssxohASTlRFq6Db0w7asale/jK5tS2useI1sYBYRiLEyqQsdi/f0xpSVS6yEZXztlCD28l/Jh7rpBMaYJvghuUBWAEZJtXuYwhtS++N2MWxyMh2WsJupbkxbPX98mBljacZO1844oVX3xFrdaygxBAf3wsQNjFI7Wu2QPzbSsyqMSvOVzS8ZN6LxJgu94g06erGUKHjFjrRJJ3Amc/V1vw2oqXnP6rr3T1RpK8+uXNJMemjqg1y/OWxmJa1nmen+rRnJtqvObP45YXF3rm8z60x2Jy8jseMkNWK7pvnn9P6r3x7ZqJtfvl8eriAsgs2L85Mq47GtrxjRZfrmaPWRnIBOd0c5nW9QS0rNQWvDzmHS6zT094yVDcp2cSLOZj034oG6VmbV1oi73nF0uv6jWAhpSnfKGxlidXrSrT0mzZvYMepGzW6w05RFAfXKuq+qaWnEGQ7eHKND/T3UdZrfi9d1DGJsQj5+XNp/pvot7Zp7t5fhscqH1KGu1prJXasXU6Xq+sGMRiOd3pfo/S9J/7cRV3azcQ04RqAd2NkvxNeZ6D6HLTfz6e/q52tDodKEfzBZ7ZrgrdgJjIJQUnKuL1aK9KBFqIV74/4Z3NvPGALlRz841sSkF4C8iFIEZU4ZRDYLk4SkoFk+uGemod6iGwPOFVunQKivj1yAxLR335xqIRuW/phCLHe+dqwhGRHaIb+XCgRtKvzh7ZNOxXh5wx7UuYqcVgV00i38GF041dtvFZYbXsA+FwRpkMQE2swKXSreTJ+CshCQjIu+LLzVUgCSg/CuVsZLUBkHnCyllpb9zEY1uXziGnGSsdOJ4ctjA7WMqF533rIRIxsUV2o3+MGqXRHURoA4S8XV6PT1IsUPdSjNNNXL09cCRlKxT1HBrFD6Z05Ei6bJOd+cvl0XT0EdOMaKN7XLiIzXgPXhxu6mlEPIFmNGb+G0oAOnAHlQV+ct0I6OnGo6dUeNsaUBbFa3MioBJduPy741CdqzlKQByL4MEwQAWvIGWkRbbTwLQZJaYuwgc043SK2JJGSnsuGyJ+WMn3rHILKnc5MbUj2xqKbejg0lSG1v2u6wwSVLIPPHOGIhW9emBCJUap59cCMH8SyQnir2w6iBvz4cXtXg29XDECW4beuFL+aUWK7enpjwIxhSI+aOcCMt+6vjDGIeVfXAT80p1JKOKxpXGkTnk5wTO5APlOcsNM7d2qxhpe6UxJNZIxDZbclBz+2JpqzdmvfCHS5bNHxvi9sYS7mnahTLEDfz7YsxkVzg0GTKKRN3zWCEUskr/fLIC8lYNVe6jIIfh6bZEF9ucTU/OjQHt5x2PcW7uCIcOFCEmJVOGMpMtjIAO2MoFmAstMXudn1wW0AuLKatKGSI3u40w/dKOzWGSVa1iyj+WzdxYyXZMBu5eHZwkKeayUG9ZJSt2wEnJEDjLIBKJe2KKu5hUgbYSivZte2LXdLd2xZJP5yFhyuXTFlB6YGfb6Yd0xe0bXAgEm/LjUBvixQ4cZROcGKtVvYMMBibYq07ZGYHGQw8p0U5XfdK1rFZdzkIpuZTFlHtkxO59XJlXAMr1ePtkyYQY/yYkP58mTKfxZH/wBx+MFbffJkwjJ1QehznO14xZ7xP0yZMsa/jJ18Yxj+UDbwZVor+AbvLkyZr+BNQ/8AWj85b1IdunsfzGTJirXU6jTh+Hp/kj/N6Z09HS0v4X/24cf/AFMmTOdIT6fGJpbAbvB75sjkyZKgxdjJ4yZMIeP8v3yT4ftkyZFquXGLPjJkyizR/lww/nflyZMIP/yx+chvJvJkxQEsbwaX/uS+cmTEVZr8nzmeLWq165MmEPq8nwY0OHJkwv8AC6e85X65pjtdZMmEJ/8AJ93Bq8mTJiAahsfOVwfzmTJiqaWVm+rvkyZD+NMyqrFlkyZf4irU/lMc4MmTEBm7YsP5smTAveDKDn75MmKLZfy5VqeMmTEU0P5XA5MmBIY038v2yZMJ/SR5xzJkwUZcZI5MmBDD4++TJj+JAOPtgOXJkwoS4xXjJkyf1Vb4+csMmTH9Dn8uLDkyZMESfGLHJkwhpYs/OTJlUsctOMmTIVPGB/lyZMsRU845xkyZFDzlerkyZAun5xz+XJkzQmTJkyj/2Q==';

export const getFile = (dataUrl) => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  let blob = new File([u8arr], 'web-image', { type: mime });
  return blob;
};
export const testFile = getFile(dataUrl);
describe('Testing Upload utils', () => {
  test('requestImage function', (done) => {
    expect.assertions(2);
    const img = new Image();
    img.src = dataUrl;
    global.OldImage = Image;
    global.Image = class extends Image {
      constructor() {
        super();
        setTimeout(() => {
          this.onload(); // simulate success
          this.onerror(); // simulate error
        }, 100);
      }
    };
    module.requestImage(url, 'anonymous').then((data) => {
      expect(data).toMatchObject(img);
      expect(data.getAttribute('crossOrigin')).toBe('anonymous');
      done();
    });
  });

  test('imageFile2DataUrl function', (done) => {
    const { document } = new JSDOM('<!doctype html><html><body></body></html>', { resources: 'usable' }).window;
    global.document = document;
    global.window = document.defaultView;
    const getUrl = () => url;
    if (typeof window.URL.createObjectURL === 'undefined') {
      Object.defineProperty(window.URL, 'createObjectURL', { value: getUrl });
    }
    /**
     * overwrite canvas's getContext
     */
    const createElement = document.createElement.bind(document);
    global.document.createElement = (tagName) => {
      if (tagName === 'canvas') {
        return {
          ...createElement('canvas'),
          toDataURL: new Canvas().toDataURL,
          getContext: (str) => {},
        };
      }
      return createElement(tagName);
    };
    const img = new OldImage();
    const mock = jest.spyOn(module, 'requestImage');
    mock.mockResolvedValue(img);
    module.imageFile2DataUrl(testFile).then((data) => {
      expect(typeof data).toEqual('string');
      mock.mockRestore();
      done();
    });
  });

  test('dataUrl2ImageFile function', () => {
    const ret = module.dataUrl2ImageFile(dataUrl);
    expect(ret).toEqual(testFile);
  });
  test('fetchImageFileFromUrl function', (done) => {
    const img = new OldImage();
    img.src = url;
    const mock = jest.spyOn(module, 'requestImage');
    mock.mockResolvedValue(img);
    module.fetchImageFileFromUrl(url).then((data) => {
      console.log(data);
      expect(Object.keys(data)).toEqual(['originFile', 'dataUrl']);
      mock.mockRestore();
      done();
    });
  });
  test('fetchImageFileFromUrl function in throw error case', (done) => {
    const mock = jest.spyOn(module, 'requestImage');
    mock.mockRejectedValue({ message: 'error' });
    module.fetchImageFileFromUrl(url).catch((data) => {
      expect(data).toEqual({ message: 'error' });
      mock.mockRestore();
      done();
    });
  });
  test('isOnlyAcceptImg function', () => {
    expect(module.isOnlyAcceptImg('image/*')).toBe(true);
    expect(module.isOnlyAcceptImg()).toBe(false);
  });

  test('getFileType function', (done) => {
    const event = {
      target: {
        result: [testFile],
      },
    };

    global.FileReader = class extends FileReader {
      constructor() {
        super();
        setTimeout(() => {
          this.onload(event);
        }, 100);
      }
    };
    FileReader.prototype.readAsArrayBuffer = jest.fn();
    const mock = jest.spyOn(module, 'getHexValue');
    mock.mockReturnValue('FFD8FFE0');
    module.getFileType(testFile).then((data) => {
      expect(data).toBe('JPEG/JPG');
      done();
    });
  });
  test('getFileType function in undefined case', (done) => {
    FileReader.prototype.readAsArrayBuffer = jest.fn();
    const mock = jest.spyOn(module, 'getHexValue');
    mock.mockReturnValue('FFD8FFE4');
    module.getFileType(testFile).then((data) => {
      expect(data).toBe(undefined);
      done();
    });
  });
});
