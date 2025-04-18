import axios from 'axios';
import React, { useState } from 'react';

function Card({ list, getList }) {
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 여부를 나타내는 상태
  const [editedField, setEditedField] = useState(list.field); // 편집된 필드 값
  const [editedDescription, setEditedDescription] = useState(list.description); // 편집된 설명 값
  const [editedCookingTime, setEditedCookingTime] = useState(list.cooking_time); // 편집된 조리 시간 값
  console.log();

  // 편집 모드로 전환하는 함수
  const handleEditClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setIsEditing(true);
  };

  // 편집 취소하는 함수
  const handleCancelEdit = (e) => {
    setIsEditing(false);
    setEditedField(list.field);
    setEditedDescription(list.description);
    setEditedCookingTime(list.cooking_time);
    e.stopPropagation(); // 이벤트 전파 중단
  };

  // 수정된 값을 저장하는 함수
  const handleSaveEdit = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    // 수정할 데이터의 ID
    const recipeId = list.recipe_id; 
    console.log(recipeId);

     // 순환 참조를 방지하기 위해 데이터 객체를 직접 생성
  const requestData = {
    Field: editedField,
    description: editedDescription,
    cooking_time: editedCookingTime
  };

  console.log(requestData);
    // 여기에 수정된 레시피 상세 정보를 업데이트하는 로직을 구현할 수 있습니다.
    axios.patch(`https://recipe-backend.fly.dev/api/v1/recipes/${recipeId}`, requestData)
        .then((response) => {
            console.log(response.data.data);
            getList();
        })
        .catch((error) => {
            console.log(error);
        });
    setIsEditing(false);
    // API 호출을 통해 레시피 상세 정보를 업데이트하거나 필요한 다른 작업을 수행할 수 있습니다.
  };

  // 클릭 이벤트 핸들러 함수
  const handleCardClick = () => {
    const confirmDelete = window.confirm('이 레시피를 삭제하시겠습니까?');

    if (confirmDelete) {
      handleDelete();
    }
  };

  // 카드 삭제 함수
  const handleDelete = () => {
    // 삭제할 데이터의 ID
    const recipeId = list.recipe_id; 

    // 삭제 요청
    axios.delete(`https://recipe-backend.fly.dev/api/v1/recipes/${recipeId}`)
      .then((response) => {
          // 삭제 성공 시 필요한 작업 수행
          getList();
          console.log('카드 삭제 성공:', response.data);
      })
      .catch((error) => {
          // 삭제 실패 시 에러 처리
          console.error('카드 삭제 에러:', error);
      });
  };
  
  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <li className="aspect-[100/50] object-cover w-full">
          <div className="block max-w-sm p-6 rounded-lg shadow hover:bg-gray-800 bg-gray-400 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleCardClick}>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedField}
                  onChange={(e) => setEditedField(e.target.value)}
                  className="mb-2 px-3 py-2 rounded-lg border border-gray-300"
                  onClick={(e) => e.stopPropagation()} // 이벤트 전파 중단
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="mb-2 px-3 py-2 rounded-lg border border-gray-300"
                  onClick={(e) => e.stopPropagation()} // 이벤트 전파 중단
                ></textarea>
                <input
                  type="text"
                  value={editedCookingTime}
                  onChange={(e) => setEditedCookingTime(e.target.value)}
                  className="mb-2 px-3 py-2 rounded-lg border border-gray-300"
                  onClick={(e) => e.stopPropagation()} // 이벤트 전파 중단
                />
              </>
            ) : (
              <>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {list.field}
                </h5>
                <p className="font-normal text-white dark:text-gray-400">{list.description}</p>
                <p className="font-normal text-white dark:text-gray-400">조리시간 : {list.cooking_time}</p>
              </>
            )}
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={isEditing ? handleSaveEdit : handleEditClick}
            >
              {isEditing ? '저장' : '레시피 수정'}
            </button>
            {isEditing && (
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                onClick={handleCancelEdit}
              >
                취소
              </button> 
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Card;
