export default {
  saveUid(uid) {
    localStorage.uid = uid
  },
  getUid() {
    return localStorage.uid
  },
  deleteUid() {
    delete localStorage.uid
  }
}
