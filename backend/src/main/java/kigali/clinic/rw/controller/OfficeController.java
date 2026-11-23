package kigali.clinic.rw.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import kigali.clinic.rw.domain.Office;
import kigali.clinic.rw.service.OfficeService;

@CrossOrigin(origins = "*")
@RestController 
@RequestMapping (value="/api/office")
public class OfficeController {

    @Autowired 
    private OfficeService offServe;

    @PostMapping(value = "/save")  
    public ResponseEntity<?> saveOffice(@RequestBody Office office){
       String returnedMessage =  offServe.saveOffice(office);

       if(returnedMessage.equals("Office is saved successfully") || returnedMessage.equals("Office is created successfully")){
        return new ResponseEntity<>(returnedMessage, HttpStatus.OK);
       }else{
        return new ResponseEntity<>(returnedMessage, HttpStatus.CONFLICT);
       }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Office>> getAllOffices() {
        return ResponseEntity.ok(offServe.getAllOffices());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Office>> searchOffices(@RequestParam String keyword) {
        return ResponseEntity.ok(offServe.searchOffices(keyword));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOffice(@PathVariable UUID id) {
        String message = offServe.deleteOffice(id);
        if (message.contains("successfully")) {
            return ResponseEntity.ok(message);
        }
        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }
}
