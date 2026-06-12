// writespace-privacy.js — 心理位移「記錄↔雲端」加解密與合併（可測純函式）
// 依賴 window.JtePrivacy。掛 window.WsPrivacy。
(function (root) {
  'use strict';
  var PRIV = ['title','entries','analysis','summaryMarkdown']; // 視為私密的欄位

  function recordToCloud(record){
    if (!root.JtePrivacy || !root.JtePrivacy.isUnlocked()) return Promise.reject(new Error('locked'));
    var payload = {}; PRIV.forEach(function(k){ payload[k] = record[k]; });
    return root.JtePrivacy.encryptPrivate({ body: JSON.stringify(payload) }).then(function(enc){
      return { id: record.id, createdAt: record.createdAt, updatedAt: record.updatedAt, enc: enc.body };
    });
  }
  function cloudToRecord(doc){
    if (!doc || !doc.enc) return Promise.resolve(null);
    if (!root.JtePrivacy || !root.JtePrivacy.isUnlocked()) return Promise.resolve(null);
    return root.JtePrivacy.decryptPrivate({ body: doc.enc }).then(function(plain){
      if (plain.body == null) return null;
      var payload; try { payload = JSON.parse(plain.body); } catch(e){ return null; }
      var rec = { id: doc.id, createdAt: doc.createdAt, updatedAt: doc.updatedAt };
      PRIV.forEach(function(k){ rec[k] = payload[k]; });
      return rec;
    }).catch(function(){ return null; });
  }
  function mergeRecords(localList, cloudList){
    var by = {};
    (localList||[]).forEach(function(r){ by[r.id] = r; });
    (cloudList||[]).forEach(function(r){
      if (!r) return;
      var cur = by[r.id];
      if (!cur) { by[r.id] = r; return; }
      var t1 = new Date(r.updatedAt||r.createdAt||0).getTime();
      var t0 = new Date(cur.updatedAt||cur.createdAt||0).getTime();
      if (t1 > t0) by[r.id] = r; // 新者勝
    });
    return Object.keys(by).map(function(k){ return by[k]; });
  }
  root.WsPrivacy = { recordToCloud: recordToCloud, cloudToRecord: cloudToRecord, mergeRecords: mergeRecords, _PRIV: PRIV };
})(typeof window !== 'undefined' ? window : this);
