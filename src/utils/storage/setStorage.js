export default function setStorage(persistent, name, data) {
    try {
        const storage = persistent ? localStorage : sessionStorage;
        storage.setItem(name, data)
    } catch (error) {
        console.log(error)
    }
}