import jwtDecode from "jwt-decode";
import config from "../../config";

class JwtUtils {
  getEmail() {
    return jwtDecode(sessionStorage.token).sub;
  }

  isActif() {
    if (sessionStorage.token) {
      let decoded = jwtDecode(sessionStorage.token);
      return decoded?.isActif;
    }
    return false;
  }

  isTokenValidAndNotExpired() {
    try {
      let decoded = jwtDecode(sessionStorage.token, config.jwtSecret);
      if (Date.now() >= decoded.exp * 1000) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  isExpired() {
    let decoded = jwtDecode(sessionStorage.token);
    if (Date.now() >= decoded.exp * 1000) {
      return true;
    }
    return false;
  }

  hasAnyRole(rolesIn) {
    if (rolesIn.length === 0) {
      return true;
    }
    if (!sessionStorage.token) {
      return false;
    }
    let currentRoles = jwtDecode(sessionStorage.token)?.roles ?? [];
    sessionStorage.setItem("roles", currentRoles);
    const found = rolesIn.some((r) => currentRoles.indexOf(r) >= 0);
    return found;
  }

  logOutWithoutRefresh() {
    sessionStorage.token && sessionStorage.removeItem("token");
  }

  logOut() {
    if (sessionStorage.token) {
      sessionStorage.removeItem("token");
      window.location.reload();
    }
  }
}

export default new JwtUtils();
