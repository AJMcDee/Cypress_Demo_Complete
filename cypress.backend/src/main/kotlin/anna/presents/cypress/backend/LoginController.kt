package anna.presents.cypress.backend
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
class LoginController() {

    @PostMapping("/login")
    fun processUserLogin(@RequestBody body: LoginRequest): HttpStatus {
        return if (body.username == "anna.mcdougall" && body.password == "LetsTryCypress2022") {
            HttpStatus.ACCEPTED
        } else {
            HttpStatus.UNAUTHORIZED
        }
    }
}