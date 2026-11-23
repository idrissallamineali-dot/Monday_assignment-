package kigali.clinic.rw.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kigali.clinic.rw.domain.Office;
import kigali.clinic.rw.repository.OfficeRepository;

@Service 
public class OfficeService {

    @Autowired 
    private OfficeRepository offRepo;

    public String saveOffice(Office office){
        offRepo.save(office);
        return "Office is saved successfully";
    }

    public List<Office> getAllOffices() {
        return offRepo.findAll();
    }

    public List<Office> searchOffices(String keyword) {
        return offRepo.searchByNameOrNumber(keyword);
    }

    public String deleteOffice(UUID id) {
        if (!offRepo.existsById(id)) {
            return "Office not found";
        }
        offRepo.deleteById(id);
        return "Office deleted successfully";
    }
}
