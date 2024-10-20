import { ChevronRight, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TeacherOneSubject() {
  const { sec_id, course_id } = useParams();
  const [studentList, setstudentList] = useState([
    {
      roll_no: 1,
      name: "Aastha Sanjay Sahu",
      id: 2024122001,
      img_src: "",
    },
    {
      roll_no: 2,
      name: "Anushka Abhay Nagdeote",
      id: 2024122002,
      img_src: "",
    },
    {
      roll_no: 3,
      name: "Bhavika Naresh Puppalwar",
      id: 2024122003,
      img_src: "",
    },
    {
      roll_no: 4,
      name: "Diya Rahul Bhagat",
      id: 2024122004,
      img_src: "",
    },
    {
      roll_no: 5,
      name: "Gauri Kailash Soni",
      id: 2024122005,
      img_src: "",
    },
    {
      roll_no: 6,
      name: "Harshita Roshan Agrawal",
      id: 2024122006,
      img_src: "",
    },
    {
      roll_no: 7,
      name: "Ishika Amit Javeri",
      id: 2024122007,
      img_src: "",
    },
    {
      roll_no: 8,
      name: "Jagriti Radheshyam Sharma",
      id: 2024122008,
      img_src: "",
    },
    {
      roll_no: 9,
      name: "Janhavi Abhijit Deshpande",
      id: 2024122009,
      img_src: "",
    },
    {
      roll_no: 10,
      name: "Jessica Ajay Sajwani",
      id: 2024122010,
      img_src: "",
    },
    {
      roll_no: 11,
      name: "Janhavi Milind Kulkarni",
      id: 2024122011,
      img_src: "",
    },
    {
      roll_no: 12,
      name: "Riddhi Sameer Dani",
      id: 2024122012,
      img_src: "",
    },
    {
      roll_no: 13,
      name: "Samiksha Manish Harjal",
      id: 2024122013,
      img_src: "",
    },
    {
      roll_no: 14,
      name: "Sarah Kulsum Mohammad Saquib Arshad",
      id: 2024122014,
      img_src: "",
    },
    {
      roll_no: 15,
      name: "Smera Ashish Duragkar",
      id: 2024122015,
      img_src: "",
    },
    {
      roll_no: 16,
      name: "Shravani Ranjit Bhuwan",
      id: 2024122016,
      img_src: "",
    },
    {
      roll_no: 17,
      name: "Aayush Govind Tirmanwar",
      id: 2024122017,
      img_src: "",
    },
    {
      roll_no: 18,
      name: "Akash Dilip Purohit",
      id: 2024122018,
      img_src: "",
    },
    {
      roll_no: 19,
      name: "Akhilesh Shankar Bonde",
      id: 2024122019,
      img_src: "",
    },
    {
      roll_no: 20,
      name: "Akshat Nitin Bhole",
      id: 2024122020,
      img_src: "",
    },
    {
      roll_no: 21,
      name: "Akshay Manojkumar Chandak",
      id: 2024122021,
      img_src: "",
    },
    {
      roll_no: 22,
      name: "Aniket Namdeo Raut",
      id: 2024122022,
      img_src: "",
    },
    {
      roll_no: 23,
      name: "Aniruddha Rajendra Kide",
      id: 2024122023,
      img_src: "",
    },
    {
      roll_no: 24,
      name: "Arya Jagdish Wankhade",
      id: 2024122024,
      img_src: "",
    },
    {
      roll_no: 25,
      name: "Aryan Manish Sharma",
      id: 2024122025,
      img_src: "",
    },
    {
      roll_no: 26,
      name: "Aryan Yogesh Khandhadiya",
      id: 2024122026,
      img_src: "",
    },
    {
      roll_no: 27,
      name: "Ayush Naresh Sachan",
      id: 2024122027,
      img_src: "",
    },
    {
      roll_no: 28,
      name: "Ayush Dinesh Agrawal",
      id: 2024122028,
      img_src: "",
    },
    {
      roll_no: 29,
      name: "Ayush Sadashiv Wankhede",
      id: 2024122029,
      img_src: "",
    },
    {
      roll_no: 30,
      name: "Ayushkumar Satyanarayan Pandey",
      id: 2024122030,
      img_src: "",
    },
    {
      roll_no: 31,
      name: "Girish Gopal Nasare",
      id: 2024122031,
      img_src: "",
    },
    {
      roll_no: 32,
      name: "Harsh Gulabchandra Verma",
      id: 2024122032,
      img_src: "",
    },
    {
      roll_no: 33,
      name: "Harsh Pravinkumar Lahoti",
      id: 2024122033,
      img_src: "",
    },
    {
      roll_no: 34,
      name: "Heet Sanjay Dhanuka",
      id: 2024122034,
      img_src: "",
    },
    {
      roll_no: 35,
      name: "Khush Kiran Mahajan",
      id: 2024122035,
      img_src: "",
    },
    {
      roll_no: 36,
      name: "Mahendra Shrimant Bansode",
      id: 2024122036,
      img_src: "",
    },
    {
      roll_no: 37,
      name: "Manas Dinesh Shende",
      id: 2024122037,
      img_src: "",
    },
    {
      roll_no: 38,
      name: "Navneet Atul Jaju",
      id: 2024122038,
      img_src: "",
    },
    {
      roll_no: 39,
      name: "Nikhil Arun Gupta",
      id: 2024122039,
      img_src: "",
    },
    {
      roll_no: 40,
      name: "Paras Brijendra Singh",
      id: 2024122040,
      img_src: "",
    },
    {
      roll_no: 41,
      name: "Piyush Kashinath Channavar",
      id: 2024122041,
      img_src: "",
    },
    {
      roll_no: 42,
      name: "Pradunya Shamkant Darkonde",
      id: 2024122042,
      img_src: "",
    },
    {
      roll_no: 43,
      name: "Prakhar Sanjeev Pande",
      id: 2024122043,
      img_src: "",
    },
    {
      roll_no: 44,
      name: "Pranav Nitin Soni",
      id: 2024122044,
      img_src: "",
    },
    {
      roll_no: 45,
      name: "Pranay Prakash Nimje",
      id: 2024122045,
      img_src: "",
    },
    {
      roll_no: 46,
      name: "Prathamesh Prashant Kurekar",
      id: 2024122046,
      img_src: "",
    },
    {
      roll_no: 47,
      name: "Manmay Ritesh Boob",
      id: 2024122047,
      img_src: "",
    },
    {
      roll_no: 48,
      name: "Riddhvesh Dinesh Dixit",
      id: 2024122048,
      img_src: "",
    },
    {
      roll_no: 49,
      name: "Rishi Milind Mashidkar",
      id: 2024122049,
      img_src: "",
    },
    {
      roll_no: 50,
      name: "Rohan Rajkumar Ravi",
      id: 2024122050,
      img_src: "",
    },
    {
      roll_no: 51,
      name: "Romit Ghosh",
      id: 2024122051,
      img_src: "",
    },
    {
      roll_no: 52,
      name: "Saket Sandeep Karwa",
      id: 2024122052,
      img_src: "",
    },
    {
      roll_no: 53,
      name: "Sanidhya Santosh Jain",
      id: 2024122053,
      img_src: "",
    },
    {
      roll_no: 54,
      name: "Sanket Maroti Suryawanshi",
      id: 2024122054,
      img_src: "",
    },
    {
      roll_no: 55,
      name: "Sarthak Abhaykumar Nahar",
      id: 2024122055,
      img_src: "",
    },
    {
      roll_no: 56,
      name: "Shubham Ruplal Maskare",
      id: 2024122056,
      img_src: "",
    },
    {
      roll_no: 57,
      name: "Sujal Rahul Trivedi",
      id: 2024122057,
      img_src: "",
    },
    {
      roll_no: 58,
      name: "Sujal Shrawan Tonge",
      id: 2024122058,
      img_src: "",
    },
    {
      roll_no: 59,
      name: "Tushar Deepak Manglani",
      id: 2024122059,
      img_src: "",
    },
    {
      roll_no: 60,
      name: "Utkarsh Asit Pasari",
      id: 2024122060,
      img_src: "",
    },
    {
      roll_no: 61,
      name: "Vinayak Harpalprasad Sahu",
      id: 2024122061,
      img_src: "",
    },
    {
      roll_no: 62,
      name: "Yagyesh Rajendra Bobde",
      id: 2024122062,
      img_src: "",
    },
    {
      roll_no: 63,
      name: "Dhruv Shailesh Totala",
      id: 2024122063,
      img_src: "",
    },
    {
      roll_no: 64,
      name: "Aarsh Sameer Hadap",
      id: 2024122064,
      img_src: "",
    },
    {
      roll_no: 65,
      name: "Ishant Ravendra Tiwari",
      id: 2024122065,
      img_src: "",
    },
    {
      roll_no: 66,
      name: "Harsh Mahesh Sharma",
      id: 2024122066,
      img_src: "",
    },
    {
      roll_no: 67,
      name: "Tanmay Satyawan Sayare",
      id: 2024122067,
      img_src: "",
    },
    {
      roll_no: 68,
      name: "Nandini Prashant Giri",
      id: 2024122068,
      img_src: "",
    },
    {
      roll_no: 69,
      name: "Anushree Prakash Padole",
      id: 2024122069,
      img_src: "",
    },
    {
      roll_no: 70,
      name: "Pragati Sharad Borkar",
      id: 2024122070,
      img_src: "",
    },
  ]);

  const navigate = useNavigate();
  const courseData = {};
  return (
    <div className="UserDashboard">
      <div className="userdetails">
        <div
          className="green-uppersection"
          style={{
            height: "30vh",
          }}
        ></div>
        <div
          className="actual-details"
          style={{
            height: "fit-content",
            transform: "translateY(-20vh)",
          }}
        >
          <div>
            <p>
              Course Name <ChevronRight size={16} fill="black" />{" "}
              <span>course_name</span>
            </p>
            <p>
              Course ID <ChevronRight size={16} fill="black" />{" "}
              <span>{course_id}</span>
            </p>
            <p>
              Section Id <ChevronRight size={16} fill="black" />{" "}
              <span>{sec_id}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="StudentsContainer">
        {studentList.map((student, index) => {
          return (
            <div
              className="onestudentrow"
              onClick={() => {
                navigate(
                  `/teacherstudent/${student.id}/${course_id}/${sec_id}`
                );
              }}
            >
              <p>{student.roll_no}</p>
              <img src={student.img_src || "/Images/profile.png"} alt="" />
              <p>{student.name}</p>
              <p>{student.id}</p>
              <p>
                Visit Profile <MoveRight />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeacherOneSubject;
