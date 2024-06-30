export default function ({ store, redirect }) {
    // Check if user is logged in and is an admin
    const user = store.state.user;
    if (!user || !user.isAdmin) {
      return redirect('/login');
    }
  }
  