(function () {
  "use strict";

  var VER = "v2";
  var KEY = "nardo-" + VER;
  var HK = "nardo-hearts-" + VER;
  var PASS = "juvinardpogi"; // 
  var IMG = "Images/Products/";

  var CATS = ["Tops", "Bottoms", "Jackets", "Dresses", "Bags"];
  var GR = ["brand", "genre", "color"]; // 3 tag category
  var CHN = [
    ["listing", "Listings"],
    ["bidding", "Bidding"],
    ["claim", "Mine / Steal / Grab"],
    ["sold", "Sold out"],
  ];
  var ORDER = ["XS", "S", "M", "L", "XL", "Free"]; // for sorting size filter

  // socmeds
  var SOC = {
    "Google Drive": "https://drive.google.com/drive/folders/1C6vQVetYW45Bb7MKMyVekNKPqRYbEQFu?usp=sharing",
    "Facebook": "https://www.facebook.com/juvinard.p.mangabang",
    "Instagram": "https://www.instagram.com/dinorobongtubotv/",
    "TikTok": "https://www.tiktok.com/@yourjshop2/video/7699105799376866612",
  };

  // measurement
  var MEAS = [
    ["length", "Length", "Len"],
    ["width", "Width", "Wid"],
    ["sleeve", "Sleeve", "Slv"],
    ["waist", "Waist", "Waist"],
    ["hip", "Hip", "Hip"],
    ["inseam", "Inseam", "Inseam"],
  ];

  var TG = {
    brand: [
      "B&H",
      "Brandy Melville",
      "Gap",
      "H&M",
      "John Players",
      "Lee",
      "Pistol & Paris",
      "Tommy Hilfiger",
      "Uniqlo",
      "U.S. Polo Assn.",
      "Unbranded",
    ],
    genre: [
      "streetwear",
      "grunge",
      "y2k",
      "vintage",
      "preppy",
      "casual",
      "minimalist",
      "coquette",
      "baggy",
    ],
    color: ["black", "gray", "red", "blue", "pink", "white", "brown"],
  };

  /*
  starting products
  sizes: "M" or "Male L, Female S"
  channel: listing / bidding / claim (mine / steal / grab)
  hoursLeft: bidding/claim deadline
  */
  var SEED = [ 
    {
      file: "bh_stitchgraphic-jorts-washedblack.jpg",
      name: "B&H stitch graphic jorts",
      category: "Bottoms",
      sizes: "M",
      price: 220,
      condition: "Good condition",
      channel: "listing",
      brand: ["B&H"],
      genre: ["streetwear", "grunge"],
      color: ["black", "gray"],
      measures: { u: "in", waist: 30, inseam: 12 },
    },
    {
      file: "brandymelville_hoodie-lightgray.jpg",
      name: "Brandy Melville hoodie",
      category: "Tops",
      sizes: "Free",
      price: 180,
      condition: "Like new",
      channel: "listing",
      brand: ["Brandy Melville"],
      genre: ["casual", "minimalist"],
      color: ["gray"],
      measures: { u: "in", length: 23, width: 22, sleeve: 24 },
    },
    {
      file: "gap_hoodie-red.jpg",
      name: "Gap red hoodie",
      category: "Tops",
      sizes: "L",
      price: 150,
      condition: "Good condition",
      channel: "claim",
      type: "mine",
      hoursLeft: 30,
      brand: ["Gap"],
      genre: ["streetwear", "preppy"],
      color: ["red"],
    },
    {
      file: "hm_widelegjeans-black.jpg",
      name: "H&M wide-leg jeans",
      category: "Bottoms",
      sizes: "L",
      price: 260,
      condition: "Like new",
      channel: "listing",
      brand: ["H&M"],
      genre: ["baggy", "y2k"],
      color: ["black"],
      measures: { u: "in", waist: 32, hip: 44, inseam: 31 },
    },
    {
      file: "Johnplayers_sweater-black.jpg",
      name: "John Players sweater",
      category: "Tops",
      sizes: "L",
      price: 90,
      condition: "Good condition",
      channel: "listing",
      brand: ["John Players"],
      genre: ["minimalist", "casual"],
      color: ["black"],
    },
    {
      file: "lee_womenbootcutjeans-blue.jpg",
      name: "Lee women’s bootcut jeans",
      category: "Bottoms",
      sizes: "S",
      price: 200,
      condition: "Good condition",
      channel: "bidding",
      hoursLeft: 44,
      bid: 240,
      brand: ["Lee"],
      genre: ["vintage", "y2k"],
      color: ["blue"],
      measures: { u: "in", waist: 26, inseam: 32 },
    },
    {
      file: "pistolandparis_pinkhoodie.jpg",
      name: "Pistol & Paris pink hoodie",
      category: "Tops",
      sizes: "M",
      price: 110,
      condition: "Like new",
      channel: "claim",
      type: "steal",
      hoursLeft: 20,
      brand: ["Pistol & Paris"],
      genre: ["y2k", "coquette"],
      color: ["pink"],
    },
    {
      file: "tommyhilfiger_blue-white-stripe-sweate.jpg",
      name: "Tommy Hilfiger striped sweater",
      category: "Tops",
      sizes: "M",
      price: 120,
      condition: "Good condition",
      channel: "bidding",
      hoursLeft: 52,
      bid: 160,
      brand: ["Tommy Hilfiger"],
      genre: ["preppy", "vintage"],
      color: ["blue", "white"],
    },
    {
      file: "unbranded_coupleshirt-black.jpg",
      name: "Couple shirt set",
      category: "Tops",
      sizes: "Male L, Female S",
      price: 140,
      condition: "Like new",
      channel: "listing",
      brand: ["Unbranded"],
      genre: ["streetwear", "casual"],
      color: ["black"],
    },
    {
      file: "uniqlo_sweatpants-brown.jpg",
      name: "Uniqlo sweatpants",
      category: "Bottoms",
      sizes: "M",
      price: 170,
      condition: "Good condition",
      channel: "claim",
      type: "grab",
      hoursLeft: 72,
      brand: ["Uniqlo"],
      genre: ["casual", "baggy"],
      color: ["brown"],
      measures: { u: "in", waist: 30, inseam: 29 },
    },
    {
      file: "Uniqlo_zipup-sweater-black.jpg",
      name: "Uniqlo zip-up sweater",
      category: "Tops",
      sizes: "L",
      price: 130,
      condition: "Like new",
      channel: "listing",
      sold: true,
      brand: ["Uniqlo"],
      genre: ["minimalist", "casual"],
      color: ["black"],
    },
    {
      file: "uspoloassn_sweater_quarterzip-darkgray.jpg",
      name: "U.S. Polo Assn. quarter-zip",
      category: "Tops",
      sizes: "XL",
      price: 120,
      condition: "Good condition",
      channel: "listing",
      brand: ["U.S. Polo Assn."],
      genre: ["preppy", "minimalist"],
      color: ["gray"],
    },
  ];

  var $ = function (id) {
    return document.getElementById(id);
  };

  function peso(n) {
    return "₱" + Number(n).toLocaleString("en-PH");
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // "Male L, Female S" -> [{w: "Male", s: "L"}, {w: "Female", s: "S"}]
  function ps(v) {
    var a = v
      .split(",")
      .map(function (p) {
        p = p.trim();
        if (!p) return null;
        var k = p.lastIndexOf(" ");
        return k < 0 ? { s: p } : { w: p.slice(0, k), s: p.slice(k + 1) };
      })
      .filter(Boolean);
    return a.length ? a : [{ s: "Free" }];
  }

  // sizes back to text
  function fz(a, sep) {
    return a
      .map(function (e) {
        return (e.w ? e.w + " " : "") + e.s;
      })
      .join(sep);
  }

  function fmt(t) {
    return new Date(t).toLocaleString("en-PH", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  // time left text
  function tl(t) {
    var d = t - Date.now();
    if (d <= 0) return "ended";
    var m = Math.floor(d / 6e4);
    var h = Math.floor(m / 60);
    var days = Math.floor(h / 24);
    if (days) return days + "d " + (h % 24) + "h left";
    if (h) return h + "h " + (m % 60) + "m left";
    return m + "m left";
  }

  // time
  function toLocal(t) {
    return new Date(t - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 16);
  }

  // turn SEED rows into the objects for the site
  function mk() {
    var now = Date.now();
    return SEED.map(function (r, i) {
      return {
        id: i + 1,
        img: IMG + r.file,
        n: r.name,
        c: r.category,
        s: ps(r.sizes),
        p: r.price,
        q: r.condition,
        ch: r.channel,
        st: r.type || "",
        e: r.hoursLeft ? now + r.hoursLeft * 36e5 : 0,
        bid: r.bid || 0,
        sold: !!r.sold,
        t: { brand: r.brand, genre: r.genre, color: r.color },
        m: r.measures || null,
      };
    });
  }

  // state
  var D = mk();
  var bundle = { active: true, size: 3, price: 450 };
  var hs = []; // hearted item ids
  var bag = []; // item ids in the bag
  var ch = "listing";
  var cat = "All";
  var tgf = { brand: [], genre: [], color: [] }; // tags picked in the shop filter
  var tgOpen = false;
  var admin = false;
  var view = "shop";
  var at = "items"; // admin tab
  var editing = 0; // id of the item being edited, 0 = adding a new one
  var formTags = {}; // tags picked in the item form
  var sheetV = "";

  try {
    var sv = JSON.parse(localStorage.getItem(KEY) || "null");
    if (sv && sv.D) {
      D = sv.D;
      bundle = sv.bundle;
      TG = sv.TG || TG;
    }
    hs = JSON.parse(localStorage.getItem(HK) || "[]");
  } catch (e) {}

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ D: D, bundle: bundle, TG: TG }));
      localStorage.setItem(HK, JSON.stringify(hs));
    } catch (e) {}
  }

  function byId(i) {
    return D.filter(function (x) {
      return x.id === i;
    })[0];
  }

  // show current bid
  function cur(x) {
    return x.ch === "bidding" ? x.bid : x.p;
  }

  function ended(x) {
    return x.ch !== "listing" && x.e && x.e < Date.now();
  }

  function acc(x) {
    var n = D.indexOf(x) % 10;
    return "a" + n + (n === 5 ? " inv" : "");
  }

  function endTx(x) {
    if (x.ch === "listing" || !x.e) return "";
    return `<p class="end">Ends ${fmt(x.e)} · <b data-end="${x.e}">${tl(x.e)}</b></p>`;
  }

  function tagsTx(x) {
    var all = [];
    GR.forEach(function (g) {
      (x.t[g] || []).forEach(function (t) {
        all.push(`<span class="tag-pill ${g}">${esc(t)}</span>`);
      });
    });
    return all.join(" ");
  }

  function img(x) {
    if (!x.img) return '<div class="noimg">NO PIC</div>';
    return `<img src="${esc(x.img)}" alt="${esc(x.n)}" width="1536" height="2048" loading="lazy">`;
  }

  // bundle
  function calc() {
    var p = bag
      .map(function (i) {
        return byId(i).p;
      })
      .sort(function (a, b) {
        return b - a;
      });
    var sub = p.reduce(function (s, v) {
      return s + v;
    }, 0);
    var d = 0;
    if (bundle.active) {
      for (var k = 0; k + bundle.size <= p.length; k += bundle.size) {
        var g = p.slice(k, k + bundle.size).reduce(function (s, v) {
          return s + v;
        }, 0);
        if (g > bundle.price) d += g - bundle.price;
      }
    }
    return { sub: sub, disc: d, tot: sub - d };
  }

  function hint() {
    var n = bundle.size;
    var r = bag.length % n;
    if (!bag.length) return "Pili ka " + n + " tapos pay ka " + peso(bundle.price) + " total:)";
    if (r === 0) return "Bundle unlocked. You’re saving " + peso(calc().disc) + ".";
    var more = n - r;
    return (
      "Add " +
      more +
      (more === 1 ? " more piece" : " more pieces") +
      " for the next " +
      n +
      " at " +
      peso(bundle.price) +
      "."
    );
  }

  // what shows in the grid right now
  function vis() {
    var sz = $("size").value;
    var so = $("sort").value;
    var L = D.filter(function (x) {
      var inCh =
        cat === "Saved" ||
        (ch === "sold"
          ? x.sold
          : ch === "listing"
            ? x.ch === "listing" || x.sold // sold stuff still shows in listings, greyed out
            : x.ch === ch && !x.sold);
      var inCat = cat === "All" || (cat === "Saved" ? hs.indexOf(x.id) > -1 : x.c === cat);
      var inSz =
        !sz ||
        x.s.some(function (e) {
          return e.s === sz;
        });
      // tags: any match inside a group, but every group with picks has to match
      var inTg = GR.every(function (g) {
        return (
          !tgf[g].length ||
          tgf[g].some(function (t) {
            return (x.t[g] || []).indexOf(t) > -1;
          })
        );
      });
      return inCh && inCat && inSz && inTg;
    });
    if (so === "a")
      L.sort(function (a, b) {
        return cur(a) - cur(b);
      });
    else if (so === "d")
      L.sort(function (a, b) {
        return cur(b) - cur(a);
      });
    else
      L.sort(function (a, b) {
        return b.id - a.id;
      });
    return L;
  }

  function show(html, v, cls) {
    sheetV = v || "";
    $("panel").className = "panel box " + (cls || "");
    $("body").innerHTML = html;
    $("sheet").classList.add("on");
  }

  function card(x) {
    var got = bag.indexOf(x.id) > -1;
    var saved = hs.indexOf(x.id) > -1;
    var isBid = x.ch === "bidding";
    var off = x.sold || ended(x);
    var flag = x.ch === "claim" ? x.st : isBid ? "Bidding" : "";

    // button changes with the item state
    var btn;
    if (x.sold) {
      btn = `<button disabled>Sold out</button>`;
    } else if (ended(x)) {
      btn = `<button disabled>Ended</button>`;
    } else if (isBid) {
      btn = `<button data-a="det" data-i="${x.id}">Bid</button>`;
    } else {
      var label = got ? "In bag" : x.ch === "claim" ? "Claim" : "Grab it";
      btn = `<button data-a="add" data-i="${x.id}" ${got ? "disabled" : ""}>${label}</button>`;
    }

    return `
      <article class="card box ${acc(x)} ${off ? "off" : ""}">
        <button class="hrt" data-a="heart" data-i="${x.id}" aria-pressed="${saved}"
          aria-label="Save ${esc(x.n)}">${saved ? "♥" : "♡"}</button>
        <div class="ph" data-a="det" data-i="${x.id}">
          ${img(x)}
          ${flag && !off ? `<span class="flag">${esc(flag)}</span>` : ""}
          ${x.sold ? `<span class="stamp">Sold out</span>` : ""}
        </div>
        <p class="nm"><button class="more" data-a="det" data-i="${x.id}">${esc(x.n)}</button></p>
        <p class="meta">Size ${esc(fz(x.s, " · "))}</p>
        <p class="tags">${tagsTx(x)}</p>
        ${measureLine(x)}
        ${x.sold ? "" : endTx(x)}
        <div class="row">
          <span class="price">${isBid && !x.sold ? "<small>Current bid</small>" : ""}${peso(cur(x))}</span>
          ${btn}
        </div>
      </article>`;
  }

  function measureLine(x) {
    if (!x.m || x.m.length == null || x.m.width == null) return "";
    return `<p class="meas">${x.m.length} x ${x.m.width} ${esc(x.m.u || "in")}</p>`;
  }

  function renderNav() {
    $("tabs").innerHTML = CHN.map(function (c) {
      var on = c[0] === ch && cat !== "Saved";
      return `<button data-a="ch" data-v="${c[0]}" aria-pressed="${on}">${c[1]}</button>`;
    }).join("");

    // only show categories that actually have items
    var cats = CATS.filter(function (c) {
      return D.some(function (x) {
        return x.c === c;
      });
    });
    $("chips").innerHTML = ["All"]
      .concat(cats, ["Saved"])
      .map(function (c) {
        var label = c === "Saved" ? "♥ Saved (" + hs.length + ")" : c;
        return `<button data-a="cat" data-v="${c}" aria-pressed="${c === cat}">${label}</button>`;
      })
      .join("");
  }

  function renderSizeOptions() {
    var keep = $("size").value;
    var sizes = [];
    D.forEach(function (x) {
      x.s.forEach(function (e) {
        if (sizes.indexOf(e.s) < 0) sizes.push(e.s);
      });
    });
    sizes.sort(function (a, b) {
      var i = ORDER.indexOf(a);
      var j = ORDER.indexOf(b);
      return (i < 0 ? 99 : i) - (j < 0 ? 99 : j) || (a > b ? 1 : -1);
    });
    $("size").innerHTML =
      '<option value="">All</option>' +
      sizes
        .map(function (s) {
          return "<option>" + esc(s) + "</option>";
        })
        .join("");
    $("size").value = keep;
  }

  function renderTagPanel() {
    var count = GR.reduce(function (sum, g) {
      return sum + tgf[g].length;
    }, 0);
    $("tgbtn").textContent = "Tags" + (count ? " (" + count + ")" : "");
    $("tgpanel").hidden = !tgOpen;
    $("tgpanel").innerHTML =
      GR.map(function (g) {
        var chips = TG[g]
          .map(function (t) {
            var on = tgf[g].indexOf(t) > -1;
            return `<button class="tc ${on ? "on" : ""}" data-a="tag" data-g="${g}" data-v="${esc(t)}">${esc(t)}</button>`;
          })
          .join("");
        return `<div class="tg"><b class="${g}">${g}</b> ${chips}</div>`;
      }).join("") + `<button data-a="clr">Clear tags</button>`;
  }

  function renderFooter() {
    // banner only shows if Nardo posted a bundle
    $("bwrap").innerHTML = bundle.active
      ? `<p class="banner box">PALDO!: ${bundle.size} for ${peso(bundle.price)}<span>${hint()}</span></p>`
      : "";

    $("bartxt").textContent = bag.length
      ? bag.length + (bag.length === 1 ? " item · " : " items · ") + peso(calc().tot)
      : "Your bag is empty";

    // skip socials with no link
    $("soc").innerHTML = Object.keys(SOC)
      .filter(function (k) {
        return SOC[k];
      })
      .map(function (k) {
        return `<a href="${esc(SOC[k])}" target="_blank" rel="noopener">${k}</a>`;
      })
      .join("");
  }

  function shop() {
    renderNav();
    renderSizeOptions();
    renderTagPanel();

    var list = vis();
    var empty =
      cat === "Saved"
        ? "Nothing saved yet. Tap a heart."
        : "Nothing here. Try another channel, size, or tag.";
    $("count").textContent = list.length + " items";
    $("grid").innerHTML = list.map(card).join("") || `<p class="box">${empty}</p>`;

    renderFooter();
  }

  function detail(i) {
    var x = byId(i);
    var inBag = bag.indexOf(i) > -1;
    var saved = hs.indexOf(i) > -1;
    var isBid = x.ch === "bidding";

    // only show the measurements Nardo filled in
    var measures = "";
    if (x.m) {
      MEAS.forEach(function (k) {
        if (x.m[k[0]]) measures += `<dt>${k[1]}</dt><dd>${x.m[k[0]]} ${x.m.u || "in"}</dd>`;
      });
    }

    var tags = GR.map(function (g) {
      if (!(x.t[g] || []).length) return "";
      return `<dt>${g}</dt><dd>${x.t[g].map(esc).join(", ")}</dd>`;
    }).join("");

    var type =
      x.ch === "claim" ? "Mine / Steal / Grab: " + x.st : isBid ? "Bidding" : "Regular listing";
    var ends =
      x.ch !== "listing" && x.e
        ? `<dt>Ends</dt><dd>${fmt(x.e)} (<b data-end="${x.e}">${tl(x.e)}</b>)</dd>`
        : "";
    var bundleRow =
      bundle.active && !isBid
        ? `<dt>Bundle</dt><dd>Counts toward ${bundle.size} for ${peso(bundle.price)}</dd>`
        : "";

    // main button changes with the item state
    var action;
    if (x.sold) {
      action = `<button class="go" disabled>Sold out</button>`;
    } else if (ended(x)) {
      action = `<button class="go" disabled>Ended</button>`;
    } else if (isBid) {
      action = `
        <input id="bidv" type="number" inputmode="numeric" min="${x.bid + 10}"
          value="${x.bid + 10}" aria-label="Your bid">
        <button class="go" data-a="bid" data-i="${i}">Copy bid</button>`;
    } else {
      var label = inBag ? "In your bag" : x.ch === "claim" ? "Claim it" : "Add to bag";
      action = `<button class="go" data-a="add2" data-i="${i}" ${inBag ? "disabled" : ""}>${label}</button>`;
    }

    show(
      `
      <div class="ph big">${img(x)}</div>
      <h2>${esc(x.n)}</h2>
      <p class="price">${peso(cur(x))}</p>
      <dl class="spec">
        <dt>Category</dt><dd>${x.c}</dd>
        <dt>Size</dt><dd>${esc(fz(x.s, " · "))}</dd>
        ${measures}
        <dt>Condition</dt><dd>${esc(x.q)}</dd>
        ${tags}
        <dt>Type</dt><dd>${type}</dd>
        ${ends}
        <dt>Stock</dt><dd>1 piece only</dd>
        ${bundleRow}
      </dl>
      <div class="drow">
        ${action}
        <button data-a="heart" data-i="${i}">${saved ? "♥ Saved" : "♡ Save"}</button>
      </div>
      <p class="note" id="msg"></p>`,
      "d",
      acc(x),
    );
  }

  function bagView() {
    var c = calc();

    var lines = bag.length
      ? bag
          .map(function (i) {
            var x = byId(i);
            return `
            <div class="line">
              <span>${esc(x.n)} (${esc(fz(x.s, "/"))})</span>
              <span>${peso(x.p)}<button data-a="rm" data-i="${i}">Remove</button></span>
            </div>`;
          })
          .join("")
      : `<p class="note">Your bag is empty. Pick something before someone else does.</p>`;

    var discount = c.disc
      ? `<div class="line">
           <span>PALDO! (${bundle.size} for ${peso(bundle.price)})</span>
           <span class="save">−${peso(c.disc)}</span>
         </div>`
      : "";

    show(
      `
      <h2>Your bag</h2>
      ${lines}
      ${discount}
      <div class="tot"><span>Total</span><span>${peso(c.tot)}</span></div>
      <button class="go" data-a="order">Copy order for Messenger</button>
      <p class="note" id="msg">Copy paste niyo order sakin sa socmed ko pm</p>`,
      "b",
    );
  }

  function copy(t) {
    var m = $("msg");
    function ok() {
      m.textContent = "Copied. Paste niyo sakin sa pm.";
      if (/^https?:/.test(SOC.Messenger)) window.open(SOC.Messenger, "_blank");
    }
    function bad() {
      m.textContent = "Couldn’t copy. Press and hold the text to copy it:\n" + t;
    }
    try {
      navigator.clipboard.writeText(t).then(ok, bad);
    } catch (e) {
      bad();
    }
  }

  function adm() {
    var tabs = [
      ["items", "Items"],
      ["form", "Add item"],
      ["tags", "Tags"],
      ["bundle", "Bundle"],
    ]
      .map(function (t) {
        return `<button data-a="tab" data-v="${t[0]}" class="${at === t[0] ? "on" : ""}">${t[1]}</button>`;
      })
      .join("");

    var page;
    if (at === "items") page = adminItems();
    else if (at === "form") page = form();
    else if (at === "tags") page = adminTags();
    else page = adminBundle();

    $("admin").innerHTML = `
      <div class="hz">ADMIN KA NA BAI</div>
      <nav class="at">
        ${tabs}
        <button data-a="shopv">View shop</button>
        <button data-a="adexit">Exit</button>
      </nav>
      ${page}`;

    // the tag pickers need filling in after the form is on the page
    if (at === "form") {
      GR.forEach(function (g) {
        renderSel(g);
        renderOpts(g);
      });
    }
  }

  function adminItems() {
    return D.slice()
      .reverse()
      .map(function (x) {
        var kind = x.ch === "claim" ? "Mine/Steal/Grab: " + x.st : x.ch;
        var status = x.sold ? " · SOLD" : ended(x) ? " · ENDED" : "";
        var ends = x.e ? " · ends " + fmt(x.e) : "";
        return `
          <div class="ar ${x.sold ? "sold" : ""}">
            ${img(x)}
            <div><b>${esc(x.n)}</b><br>${kind}${status} · ${peso(cur(x))}${ends}</div>
            <div class="ab">
              <button data-a="edit" data-i="${x.id}">Edit</button>
              <button data-a="sold" data-i="${x.id}">${x.sold ? "Mark unsold" : "Mark sold"}</button>
              <button data-a="del" data-i="${x.id}">Delete</button>
            </div>
          </div>`;
      })
      .join("");
  }

  function adminTags() {
    var boxes = GR.map(function (g) {
      var tags = TG[g]
        .map(function (t) {
          return `<button class="rt" data-a="rtag" data-g="${g}" data-v="${esc(t)}" title="Remove from site">${esc(t)} ✕</button>`;
        })
        .join("");
      return `
        <div class="adbox">
          <h3>${g}</h3>
          ${tags}
          <div class="drow">
            <input id="nt-${g}" placeholder="New ${g} tag">
            <button data-a="atag" data-g="${g}">Add</button>
          </div>
        </div>`;
    }).join("");
    return boxes + `<p class="note">Add, edit, remove tags</p>`;
  }

  function adminBundle() {
    return `
      <div class="adbox">
        <h3>Bundle deal</h3>
        <div class="af">
          <label>Pieces<input id="b-s" type="number" value="${bundle.size}"></label>
          <label>Bundle price (₱)<input id="b-p" type="number" value="${bundle.price}"></label>
        </div>
        <div class="drow">
          <button data-a="bpost">${bundle.active ? "Update bundle" : "Post bundle"}</button>
          ${bundle.active ? `<button data-a="bdel">Remove bundle</button>` : ""}
        </div>
        <p class="note">Basta bundle boi</p>
      </div>`;
  }

  // same form for adding and editing
  function form() {
    var x = editing
      ? byId(editing)
      : {
          n: "",
          img: "",
          c: "Tops",
          s: [{ s: "M" }],
          p: "",
          q: "Good condition",
          ch: "listing",
          st: "mine",
          bid: "",
          e: 0,
          sold: false,
          t: { brand: [], genre: [], color: [] },
        };
    var m = x.m || {};

    formTags = {};
    GR.forEach(function (g) {
      formTags[g] = (x.t[g] || []).slice();
    });

    function options(list, selected) {
      return list
        .map(function (o) {
          return `<option value="${o[0]}" ${o[0] === selected ? "selected" : ""}>${o[1]}</option>`;
        })
        .join("");
    }

    var pickers = GR.map(function (g) {
      return `
        <div class="full tp">
          <b>${g}</b>
          <div class="sel" id="sel-${g}"></div>
          <details>
            <summary>Pick ${g} tags</summary>
            <input data-q="${g}" placeholder="Type to search, or add a new one" autocomplete="off">
            <div class="opts" id="opts-${g}"></div>
          </details>
        </div>`;
    }).join("");

    var measureInputs = MEAS.map(function (k) {
      return `<label>${k[1]}<input id="m-${k[0]}" type="number" step="any" value="${m[k[0]] || ""}"></label>`;
    }).join("");

    return `
      <div class="af">
        <label class="full">Name<input id="f-n" value="${esc(x.n)}"></label>
        <label>Image file (in Images/Products)<input id="f-i" value="${esc((x.img || "").replace(IMG, ""))}"></label>
        <label>Category
          <select id="f-c">${options(
            CATS.map(function (c) {
              return [c, c];
            }),
            x.c,
          )}</select>
        </label>
        <label>Sizes (M or Male L, Female S)<input id="f-s" value="${esc(fz(x.s, ", "))}"></label>
        <label>Price / starting bid (₱)<input id="f-p" type="number" value="${x.p}"></label>
        <label>Condition<input id="f-q" value="${esc(x.q)}"></label>
        <label>Channel<select id="f-ch">${options(CHN.slice(0, 3), x.ch)}</select></label>
        <label>Type (Mine/Steal/Grab only)
          <select id="f-st">${options(
            [
              ["mine", "Mine"],
              ["steal", "Steal"],
              ["grab", "Grab"],
            ],
            x.st,
          )}</select>
        </label>
        <label>Current bid (bidding only)<input id="f-b" type="number" value="${x.bid}"></label>
        <label>Ends at (bidding and claim)
          <input id="f-e" type="datetime-local" value="${x.e ? toLocal(x.e) : ""}">
        </label>
        <label class="chk"><input id="f-x" type="checkbox" ${x.sold ? "checked" : ""}> Sold</label>
        ${pickers}
        <b class="full">Measurements (optional, fill only what you have)</b>
        <label>Unit<select id="m-u">${options(
          [
            ["in", "inches"],
            ["cm", "cm"],
          ],
          m.u || "in",
        )}</select></label>
        ${measureInputs}
        <div class="full drow">
          <button data-a="sav">${editing ? "Save changes" : "Add item"}</button>
          <button data-a="tab" data-v="items">Cancel</button>
        </div>
        <p class="note full" id="amsg"></p>
      </div>`;
  }

  function renderSel(g) {
    var chips = formTags[g]
      .map(function (t) {
        return `<button class="rt" data-a="unpick" data-g="${g}" data-v="${esc(t)}">${esc(t)} ✕</button>`;
      })
      .join("");
    $("sel-" + g).innerHTML = chips || `<span class="dim">none yet</span>`;
  }

  // option list
  function renderOpts(g) {
    var raw = $("admin")
      .querySelector('[data-q="' + g + '"]')
      .value.trim();
    var q = raw.toLowerCase();
    var list = TG[g].filter(function (t) {
      return t.toLowerCase().indexOf(q) > -1;
    });
    var html = list
      .map(function (t) {
        var on = formTags[g].indexOf(t) > -1;
        return `<button class="tc ${on ? "on" : ""}" data-a="pick" data-g="${g}" data-v="${esc(t)}">${esc(t)}</button>`;
      })
      .join("");
    var exact = TG[g].some(function (t) {
      return t.toLowerCase() === q;
    });
    if (q && !exact)
      html += `<button class="tc new" data-a="pickadd" data-g="${g}">+ add “${esc(raw)}”</button>`;
    $("opts-" + g).innerHTML = html;
  }

  // typed tag
  function addPick(g) {
    var input = $("admin").querySelector('[data-q="' + g + '"]');
    var raw = input.value.trim();
    if (!raw) return;
    var found = TG[g].filter(function (t) {
      return t.toLowerCase() === raw.toLowerCase();
    })[0];
    var tag = found || raw;
    if (!found) {
      TG[g].push(tag);
      save();
    }
    if (formTags[g].indexOf(tag) < 0) formTags[g].push(tag);
    input.value = "";
    renderSel(g);
    renderOpts(g);
  }

  function saveItem() {
    var n = $("f-n").value.trim();
    var p = +$("f-p").value;
    if (!n || !p) {
      $("amsg").textContent = "Needs a name and a price.";
      return;
    }
    var x = editing ? byId(editing) : { id: Date.now() };
    var chn = $("f-ch").value;
    var end = $("f-e").value;
    var im = $("f-i").value.trim();

    x.n = n;
    x.p = p;
    x.c = $("f-c").value;
    x.s = ps($("f-s").value);
    x.q = $("f-q").value.trim() || "Good condition";
    x.ch = chn;
    x.img = im ? (im.indexOf("/") > -1 ? im : IMG + im) : "";
    x.sold = $("f-x").checked;
    x.st = chn === "claim" ? $("f-st").value : "";
    x.bid = chn === "bidding" ? +$("f-b").value || p : 0;
    x.e = chn === "listing" ? 0 : end ? new Date(end).getTime() : Date.now() + 864e5;

    x.t = {};
    GR.forEach(function (g) {
      x.t[g] = formTags[g].slice();
    });

    // measurements
    var m = { u: $("m-u").value };
    var any = false;
    MEAS.forEach(function (k) {
      var v = parseFloat($("m-" + k[0]).value);
      if (v) {
        m[k[0]] = v;
        any = true;
      }
    });
    x.m = any ? m : null;

    if (!editing) D.push(x);
    save();
    editing = 0;
    at = "items";
    render();
  }

  // click
  var ACT = {
    x: function () {
      $("sheet").classList.remove("on");
      sheetV = "";
    },
    ch: function (i, t) {
      ch = t.dataset.v;
      if (cat === "Saved") cat = "All";
      shop();
    },
    cat: function (i, t) {
      cat = t.dataset.v;
      shop();
    },
    tgl: function () {
      tgOpen = !tgOpen;
      shop();
    },
    tag: function (i, t) {
      var a = tgf[t.dataset.g];
      var k = a.indexOf(t.dataset.v);
      if (k > -1) a.splice(k, 1);
      else a.push(t.dataset.v);
      shop();
    },
    clr: function () {
      tgf = { brand: [], genre: [], color: [] };
      shop();
    },
    det: function (i) {
      detail(i);
    },
    heart: function (i) {
      var k = hs.indexOf(i);
      if (k > -1) hs.splice(k, 1);
      else hs.push(i);
      save();
      shop();
      if (sheetV === "d") detail(i);
    },
    add: function (i) {
      if (bag.indexOf(i) < 0) bag.push(i);
      shop();
    },
    add2: function (i) {
      if (bag.indexOf(i) < 0) bag.push(i);
      shop();
      detail(i);
    },
    rm: function (i) {
      bag = bag.filter(function (b) {
        return b !== i;
      });
      shop();
      bagView();
    },
    bagv: bagView,
    order: function () {
      if (!bag.length) {
        $("msg").textContent = "Your bag is empty. Pick an item first.";
        return;
      }
      var c = calc();
      var lines = bag.map(function (i) {
        var x = byId(i);
        return "- " + x.n + " (" + fz(x.s, "/") + ") " + peso(x.p);
      });
      var note = c.disc
        ? " (" + bundle.size + " for " + peso(bundle.price) + " bundle applied)"
        : "";
      copy("Hi! I’d like to get:\n" + lines.join("\n") + "\nTotal: " + peso(c.tot) + note);
    },
    bid: function (i) {
      var x = byId(i);
      var v = +$("bidv").value;
      if (v <= x.bid) {
        $("msg").textContent = "Your bid must be higher than " + peso(x.bid) + ".";
        return;
      }
      copy(
        "Hi! I’d like to bid " +
          peso(v) +
          " on " +
          x.n +
          " (" +
          fz(x.s, "/") +
          "). Current bid: " +
          peso(x.bid) +
          ".",
      );
    },

    // admin stuff
    adopen: function () {
      if (admin) {
        view = "admin";
        render();
        ACT.x();
        return;
      }
      show(
        `<h2>Admin</h2>
        <p class="note">(Basta lagay mo: ${PASS})</p>
        <div class="drow">
          <input id="pc" type="password" aria-label="Passcode">
          <button class="go" data-a="login">Enter</button>
        </div>
        <p class="note" id="msg"></p>`,
        "l",
      );
    },
    login: function () {
      if ($("pc").value === PASS) {
        admin = true;
        view = "admin";
        ACT.x();
        render();
      } else {
        $("msg").textContent = "Wrong passcode.";
      }
    },
    adexit: function () {
      admin = false;
      view = "shop";
      render();
    },
    shopv: function () {
      view = "shop";
      render();
    },
    tab: function (i, t) {
      at = t.dataset.v;
      editing = 0;
      adm();
    },
    edit: function (i) {
      editing = i;
      at = "form";
      adm();
    },
    sold: function (i) {
      var x = byId(i);
      x.sold = !x.sold;
      save();
      adm();
    },
    del: function (i, t) {
      // first click asks, second click deletes
      if (t.dataset.c) {
        D = D.filter(function (x) {
          return x.id !== i;
        });
        bag = bag.filter(function (b) {
          return b !== i;
        });
        save();
        adm();
      } else {
        t.dataset.c = 1;
        t.textContent = "Sure?";
      }
    },
    sav: saveItem,
    pick: function (i, t) {
      var a = formTags[t.dataset.g];
      var k = a.indexOf(t.dataset.v);
      if (k > -1) a.splice(k, 1);
      else a.push(t.dataset.v);
      renderSel(t.dataset.g);
      renderOpts(t.dataset.g);
    },
    unpick: function (i, t) {
      var g = t.dataset.g;
      formTags[g] = formTags[g].filter(function (o) {
        return o !== t.dataset.v;
      });
      renderSel(g);
      renderOpts(g);
    },
    pickadd: function (i, t) {
      addPick(t.dataset.g);
    },
    rtag: function (i, t) {
      // removing a tag takes it off every item too
      var g = t.dataset.g;
      var v = t.dataset.v;
      TG[g] = TG[g].filter(function (o) {
        return o !== v;
      });
      D.forEach(function (x) {
        x.t[g] = (x.t[g] || []).filter(function (o) {
          return o !== v;
        });
      });
      tgf[g] = tgf[g].filter(function (o) {
        return o !== v;
      });
      save();
      adm();
    },
    atag: function (i, t) {
      var g = t.dataset.g;
      var v = $("nt-" + g).value.trim();
      if (v && TG[g].indexOf(v) < 0) {
        TG[g].push(v);
        save();
      }
      adm();
    },
    bpost: function () {
      var s = +$("b-s").value;
      var p = +$("b-p").value;
      if (s >= 2 && p > 0) {
        bundle = { active: true, size: s, price: p };
        save();
      }
      adm();
    },
    bdel: function () {
      bundle.active = false;
      save();
      adm();
    },
  };

  document.addEventListener("click", function (e) {
    if (e.target === $("sheet")) return ACT.x(); // clicked the dark area
    var t = e.target.closest("[data-a]");
    if (!t || t.disabled) return;
    var f = ACT[t.dataset.a];
    if (f) f(+t.dataset.i || 0, t, e);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    if (e.target.id === "pc") ACT.login();
    if (e.target.dataset.q) {
      e.preventDefault();
      addPick(e.target.dataset.q);
    }
  });

  // typing in tag picker
  document.addEventListener("input", function (e) {
    if (e.target.dataset.q) renderOpts(e.target.dataset.q);
  });

  $("size").onchange = $("sort").onchange = shop;

  function render() {
    var a = admin && view === "admin";
    document.body.classList.toggle("adm", a);
    document.body.classList.toggle("isadmin", admin);
    if (a) adm();
    else shop();
    window.scrollTo(0, 0);
  }

  function setTickerDuration() {
    var ticker = document.querySelector(".ticker");
    var text = ticker && ticker.querySelector("span");
    if (!ticker || !text) return;
    var travel = window.innerWidth + text.scrollWidth;
    ticker.style.setProperty("--ticker-duration", travel / 147 + "s");
  }

  window.addEventListener("resize", setTickerDuration);
  document.fonts.ready.then(setTickerDuration);

  // keep the countdowns ticking
  setInterval(function () {
    [].forEach.call(document.querySelectorAll("[data-end]"), function (n) {
      n.textContent = tl(+n.dataset.end);
    });
  }, 30000);

  shop();
  setTickerDuration();
})();