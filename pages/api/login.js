export default function handler(req, res) {
    const { username, password } = req.body;

    console.log("== LOGIN DEBUG ==");
    console.log("Username from form:", username);
    console.log("Password from form:", password);
    console.log("Password from env:", process.env.ADMIN_PASSWORD);

    if (
        username === "admin" &&
        password === process.env.ADMIN_PASSWORD
    ) {
        console.log("✅ Login successful");
        res.status(200).json({ success: true });
    } else {
        console.log("❌ Invalid login");
        res.status(401).json({ success: false, message: "Invalid login" });
    }
}
