import { UserListState } from '../recoil/selectors/selecter';
import { RecoilRoot, useRecoilValue } from 'recoil';



export default function UserList() {
    const userData = useRecoilValue(UserListState);

    return (
        <div>
            {/* user 매개변수 사용하여 userData 각 요소 참조 */}
            {/* 렌더링 고유 key = id --> 각 id의 name을 출력 */}
            {userData.map(user => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>       
    )
}